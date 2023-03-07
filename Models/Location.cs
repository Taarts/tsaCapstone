using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace tsaCapstone.Models
{
    public class Location
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Please enter a location.")]
        public string LocationName { get; set; }

        [Required(ErrorMessage = "Please enter a full address.")]
        public string Address { get; set; }

        public double Latitude { get; set; }
        public double Longitude { get; set; }

        public string Telephone { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
    }
}