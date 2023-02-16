using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using tsaCapstone.Models;

namespace tsaCapstone.Controllers
{
    // All of these routes will be at the base URL:     /api/Inventories
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case InventoriesController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class InventoriesController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public InventoriesController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Inventories
        //
        // Returns a list of all your Inventories
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Inventory>>> GetInventories()
        {
            // Uses the database context in `_context` to request all of the Inventories, sort
            // them by row id and return them as a JSON array.
            return await _context.Inventories.OrderBy(row => row.Id).ToListAsync();
        }

        // GET: api/Inventories/5
        //
        // Fetches and returns a specific inventory by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Inventory>> GetInventory(int id)
        {
            // Find the inventory in the database using `FindAsync` to look it up by id
            var inventory = await _context.Inventories.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (inventory == null)
            {
                // Return a `404` response to the client indicating we could not find a inventory with this id
                return NotFound();
            }

            //  Return the inventory as a JSON object.
            return inventory;
        }

        // PUT: api/Inventories/5
        //
        // Update an individual inventory with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Inventory
        // variable named inventory. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Inventory POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInventory(int id, Inventory inventory)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != inventory.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in inventory to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from inventory
            _context.Entry(inventory).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!InventoryExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }

            // Return a copy of the updated data
            return Ok(inventory);
        }

        // POST: api/Inventories
        //
        // Creates a new inventory in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Inventory
        // variable named inventory. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Inventory POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<Inventory>> PostInventory(Inventory inventory)
        {
            // Indicate to the database context we want to add this new record
            _context.Inventories.Add(inventory);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetInventory", new { id = inventory.Id }, inventory);
        }

        // DELETE: api/Inventories/5
        //
        // Deletes an individual inventory with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInventory(int id)
        {
            // Find this inventory by looking for the specific id
            var inventory = await _context.Inventories.FindAsync(id);
            if (inventory == null)
            {
                // There wasn't a inventory with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.Inventories.Remove(inventory);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // Return a copy of the deleted data
            return Ok(inventory);
        }

        // Private helper method that looks up an existing inventory by the supplied id
        private bool InventoryExists(int id)
        {
            return _context.Inventories.Any(inventory => inventory.Id == id);
        }
    }
}
