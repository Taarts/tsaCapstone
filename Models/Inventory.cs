using System;
using System.Collections.Generic;

namespace tsaCapstone.Models
{

    public class Inventory
    {
        public int Id { get; set; }
        public string Name { get; set; }
        // public string Summary { get; set; }


        public List<Book> Books { get; set; }
        public List<Magazine> Magazines { get; set; }
        // public List<Prop> Props { get; set; }

    }
}