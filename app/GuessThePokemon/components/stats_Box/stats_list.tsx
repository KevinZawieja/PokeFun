import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const stats_list = () => {

    

    return (
        <ScrollArea className="h-[80%] w-[66%] rounded-md border">
          <div className="p-4">
            <div className="mb-4 text-sm font-medium leading-none grid grid-cols-7 gap-4">
              <h4>Pokémon</h4>
              <h4>Typ</h4>
              <h4>Größe</h4>
              <h4>Breite</h4>
              <h4>Wachstumsrate</h4>
              <h4>Fangrate</h4>
              <h4>Total Stats</h4>
            </div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((pokemon) => (
              <div key={pokemon} className="text-sm grid grid-cols-7 gap-4">
                <div>Pokémon {pokemon}</div>
                <div>Typ {pokemon}</div>
                <div>Größe {pokemon}</div>
                <div>Breite {pokemon}</div>
                <div>Wachstumsrate {pokemon}</div>
                <div>Fangrate {pokemon}</div>
                <div>Total Stats {pokemon}</div>
                <Separator className="col-span-7 my-2" />
              </div>
            ))}
          </div>
        </ScrollArea>
      );
      
    }

export default stats_list;