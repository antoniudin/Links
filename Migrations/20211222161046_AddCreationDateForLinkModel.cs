using Microsoft.EntityFrameworkCore.Migrations;

namespace Links.Migrations
{
    public partial class AddCreationDateForLinkModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CreationDate",
                table: "Links",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreationDate",
                table: "Links");
        }
    }
}
