import { Footer, Header, Navbar, TodoList } from "./components";
function App() {
  return (
    <>
      <Navbar />
      <div className="container max-w-3xl mx-auto h-[92vh] pt-24 overflow-hidden ">
        <div className=" grid gap-4 bg-white p-4 rounded-md">
          <Header />
          <TodoList />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
