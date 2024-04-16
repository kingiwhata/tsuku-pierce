interface FiltersProp {
    items: Array<string>;
}
export function Filters({ items }: FiltersProp) {
    console.log(items);
    return (
        <div className="flex flex-col justify-start items-start px-6">
            {items.map((value: string) => (
                <div className="flex gap-4">
                    <input id="test" type="checkbox" />
                    <label htmlFor="test">{value}</label>
                </div>
            ))}
        </div>
    );
}
