using System;
using System.Collections.Generic;

namespace tsaCapstone.Models
{

    public class CategoryList
    {
        public int Id { get; set; }
        public string Name { get; set; }
        // public string Summary { get; set; }

        // Navigation property
        // List has many Categories
        public int BookId { get; set; }
        public Book Book { get; set; }

        public int MagazineId { get; set; }
        public Magazine Magazine { get; set; }

        // public int PropsId { get; set; }
        // public Props Props { get; set; }

        // public int MiscId { get; set; }
        // public Misc Misc { get; set; }

        // do i need an "array of categories"?
    }
}