using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace tsaCapstone.Models
{
    public class Magazine
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Please enter a title.")]
        public string Title { get; set; }
        public string Volume { get; set; }
        public string Issue { get; set; }
        public string PublicationDate { get; set; }
        public string Quantity { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
    }
}