import Graph from "@/layout/Graph";
import OrderSection from "@/layout/OrderSection"
import SearchBar from "@/layout/SearchBar"
function Dashboard() {
  return (
    <section>
      {/*Here Section of the page starts Here
            It contains graphs to visualize , and order book summary*/}
      <div className="  flex md:flex-row flex-col mr-4 h-screen w-screen bg-blue-200 justify-center items-center">
        {/*graph section*/}
        <div className="md:size-1/2 duration-500 rounded-lg border-2 border-red-900   size-auto flex flex-col bg-cyan-200">
          Graphs
            <SearchBar />
            <Graph />
                    
        </div>
        {/*order book section*/}
        <div>Order Section
            <OrderSection />  
      </div>
      </div>
    </section>
  );
}

export default Dashboard;
