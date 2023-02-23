using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace tsaCapstone.Models
{
    public class Book
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Please enter a title.")]

        public string Title { get; set; }
        [Required(ErrorMessage = "Please enter an author.")]

        public string Author { get; set; }
        public string Publisher { get; set; }
        public string PublicationDate { get; set; }
        public string ISBN { get; set; }
        public string Quantity { get; set; }

        [Required(ErrorMessage = "Please enter a *Nick-Name.")]
        public string NickName { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
    }
}