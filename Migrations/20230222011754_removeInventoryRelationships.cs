using Microsoft.EntityFrameworkCore.Migrations;

namespace tsaCapstone.Migrations
{
    public partial class removeInventoryRelationships : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Books_Inventories_InventoryId",
                table: "Books");

            migrationBuilder.DropForeignKey(
                name: "FK_Magazines_Inventories_InventoryId",
                table: "Magazines");

            migrationBuilder.DropIndex(
                name: "IX_Magazines_InventoryId",
                table: "Magazines");

            migrationBuilder.DropIndex(
                name: "IX_Books_InventoryId",
                table: "Books");

            migrationBuilder.DropColumn(
                name: "InventoryId",
                table: "Magazines");

            migrationBuilder.DropColumn(
                name: "InventoryId",
                table: "Books");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "InventoryId",
                table: "Magazines",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "InventoryId",
                table: "Books",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Magazines_InventoryId",
                table: "Magazines",
                column: "InventoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Books_InventoryId",
                table: "Books",
                column: "InventoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Books_Inventories_InventoryId",
                table: "Books",
                column: "InventoryId",
                principalTable: "Inventories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Magazines_Inventories_InventoryId",
                table: "Magazines",
                column: "InventoryId",
                principalTable: "Inventories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
