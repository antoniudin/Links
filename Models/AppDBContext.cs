using Microsoft.EntityFrameworkCore;

namespace Links.Models
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options)
            :base(options)
        {
        }
        public DbSet<Link> Links { get; set; }
        public DbSet<Tag> Tags { get; set; }
    }
}