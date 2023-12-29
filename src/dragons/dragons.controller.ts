import { Controller, Get, Query } from "@nestjs/common";
import { DragonsService, IDragon } from "./dragons.service";

@Controller("dragons")
export class DragonsController {
  constructor(private readonly dragonsService: DragonsService) {}

  @Get()
  async getDragons(@Query("name") name: string): Promise<IDragon[]> {
    return this.dragonsService.findDragon(name);
  }

  @Get("random")
  async getRandomDragon(): Promise<IDragon> {
    return this.dragonsService.randomDragon();
  }
}
