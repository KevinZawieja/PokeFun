import { Input } from "@/components/ui/input"

const search_bar = () => {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="pokename" placeholder="name of the pokemon" />
    </div>
    );
}

export default search_bar;