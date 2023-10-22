import { Podcast } from "@/hooks/usePodcasts";
import { useState, ChangeEvent } from "react";
function Filter({
  dataToFilter,
  renderComponent,
}: {
  dataToFilter: Object[];
  renderComponent: any;
}) {
  const filteredData = dataToFilter;
  const [filter, setFilter] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  // Ahora lo tengo para uqe filtre solo por Podcast. Trabajarlo cuando funcione para que sea mas genérico
  // function to filter

  return (
    <>
      <input type="text" value={filter} onChange={handleInputChange}></input>

      {renderComponent(filteredData)}
    </>
  );
}

export default Filter;
