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
    // All of these routes will be at the base URL:     /api/Magazines
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case MagazinesController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class MagazinesController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public MagazinesController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Magazines
        //
        // Returns a list of all your Magazines
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Magazine>>> GetMagazines()
        {
            // Uses the database context in `_context` to request all of the Magazines, sort
            // them by row id and return them as a JSON array.
            return await _context.Magazines.OrderBy(row => row.Id).ToListAsync();
        }

        // GET: api/Magazines/5
        //
        // Fetches and returns a specific magazine by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Magazine>> GetMagazine(int id)
        {
            // Find the magazine in the database using `FindAsync` to look it up by id
            var magazine = await _context.Magazines.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (magazine == null)
            {
                // Return a `404` response to the client indicating we could not find a magazine with this id
                return NotFound();
            }

            //  Return the magazine as a JSON object.
            return magazine;
        }

        // PUT: api/Magazines/5
        //
        // Update an individual magazine with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Magazine
        // variable named magazine. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Magazine POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMagazine(int id, Magazine magazine)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != magazine.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in magazine to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from magazine
            _context.Entry(magazine).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!MagazineExists(id))
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
            return Ok(magazine);
        }

        // POST: api/Magazines
        //
        // Creates a new magazine in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Magazine
        // variable named magazine. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Magazine POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<Magazine>> PostMagazine(Magazine magazine)
        {
            // Indicate to the database context we want to add this new record
            _context.Magazines.Add(magazine);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetMagazine", new { id = magazine.Id }, magazine);
        }

        // DELETE: api/Magazines/5
        //
        // Deletes an individual magazine with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMagazine(int id)
        {
            // Find this magazine by looking for the specific id
            var magazine = await _context.Magazines.FindAsync(id);
            if (magazine == null)
            {
                // There wasn't a magazine with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.Magazines.Remove(magazine);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // Return a copy of the deleted data
            return Ok(magazine);
        }

        // Private helper method that looks up an existing magazine by the supplied id
        private bool MagazineExists(int id)
        {
            return _context.Magazines.Any(magazine => magazine.Id == id);
        }
    }
}
