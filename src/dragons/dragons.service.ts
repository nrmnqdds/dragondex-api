import { Injectable } from "@nestjs/common";

import * as dragonsJson from "../dragon-scraper/dragons.json";

export interface IDragon {
  dragonName: string;
  dragonImageUrl: string;
}

@Injectable()
export class DragonsService {
  findDragon(input: string): IDragon[] {
    return input
      ? dragonsJson.filter((dragon) =>
          // return dragons with name matching
          // 'name' query param
          dragon.dragonName.toLowerCase().includes(input),
        )
      : // returns all the dragons if the
        // 'name' query param is 'null' or ''
        dragonsJson;
  }

  randomDragon(): IDragon {
    // returns a random dragon
    return dragonsJson[Math.floor(Math.random() * dragonsJson.length)];
  }
}
