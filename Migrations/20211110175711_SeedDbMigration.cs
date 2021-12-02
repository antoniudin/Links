using Microsoft.EntityFrameworkCore.Migrations;

namespace Links.Migrations
{
    public partial class SeedDbMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Links (Name, ShortName, Visits) VALUES ('Test','ShortTest',0)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Links");
        }
    }
}
