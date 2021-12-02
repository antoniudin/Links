using Microsoft.EntityFrameworkCore.Migrations;

namespace Links.Migrations
{
    public partial class AddFieldsMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ShortName",
                table: "Links",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Visits",
                table: "Links",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ShortName",
                table: "Links");

            migrationBuilder.DropColumn(
                name: "Visits",
                table: "Links");
        }
    }
}
