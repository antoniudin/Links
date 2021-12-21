using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Links.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Links.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        private readonly AppDBContext context;

        public HomeController(AppDBContext context)
        {
            this.context = context;
        }

        //list of links
        [HttpGet("/api/links")]
        public async Task <IEnumerable<Link>> GetLinks ()
        {
            return await context.Links.Include(t => t.Tags).ToListAsync();
        }

        //Add a new link
        
        [HttpPost("/api/links/")]
        public IActionResult CreateLink(Link id) {
            Link link = new Link() {
                Name = id.Name,
                ShortName = id.ShortName
            };
            
            context.Add(link);
            context.SaveChanges();
            return Ok();
        }

        //Delete a link
        
        [HttpDelete("/api/links/{id}")]
        public IActionResult Delete(int id) {
            var link = context.Links.FirstOrDefault(l=> l.Id==id);
            if (link!=null) {
                context.Remove(link);
                context.SaveChanges();
                return Ok();
            }
            else {
                return NotFound();
            }
        }

        //Main function -> Redirect to the link
        [HttpGet("/{id}")]
        public IActionResult Index(string id)
        {
            var linkInDb = context.Links.FirstOrDefault(x => x.ShortName==id);
            
            if (linkInDb==null)
            {
                return NotFound();
            }
            else
            {
                linkInDb.Visits++;
                context.SaveChanges();    
                string adress= linkInDb.Name.ToString();
                return Redirect(adress);
            }
        }

          //list of tags
        [HttpGet("/api/links/tags")]
        public async Task <IEnumerable<Tag>> GetTags ()
        {
            return await context.Tags.Include(l => l.Link).ToListAsync();
        }

            [HttpDelete("/api/links/tags/{id}")]
            public IActionResult DeleteTag (int id) {
            var tag = context.Tags.FirstOrDefault(t=> t.Id==id);
            if (tag!=null) {
                context.Remove(tag);
                context.SaveChanges();
                return Ok();
            }
            else {
                return NotFound();
            }
        }

            // Add a new tag to the link with {id}
             [HttpPost("/api/links/{id}/{newTag}")]
            public IActionResult AddTag (int id, string newTag) 
            {
                var tagInDb = context.Tags.FirstOrDefault(t => t.LinkId==id && t.Name==newTag);
                if (tagInDb!=null) return BadRequest("A Tag with this name has already existed");
                Tag tag = new Tag () 
                {
                    Name=newTag,
                    LinkId=id
                };
                context.Add(tag);
                context.SaveChanges();
                return Ok("A tag was successfully added");
            }
    }
}
