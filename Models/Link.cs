using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace Links.Models
{
    public class Link
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public ICollection<Tag> Tags { get; set; }
        public string ShortName { get; set; }
        public int Visits { get; set; }

        public Link()
        {
            Tags = new Collection<Tag>();
        }
    }
}