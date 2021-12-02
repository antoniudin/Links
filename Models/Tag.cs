using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Links.Models
{
    [Table("Tags")]
    public class Tag
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public Link Link { get; set; }
        public int LinkId { get; set; }
    }
}