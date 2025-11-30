
import { Link } from "react-router"
import { emergency_services, service_items } from "../../config"


const AdminServices = () => {
  return (
    <section className="flex w-full h-full items-center my-10 justify-center ">
      <div className="container flex flex-col items-center justify-center gap-10 w-full mx-auto ">
        <h1 className="text-2xl w-full mx-auto text-start text-primary font-semibold">আমাদের সেবাসমূহ</h1>
        <div className="flex flex-col w-full md:flex-row gap-8">
          <div className="grid grid-cols-1  w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-start gap-5">
            {service_items.map((item,index)=>(
              <Link key={index} to={item.path}
              className="flex flex-col scale-100 hover:scale-105 hover:shadow-2xl transition-transform duration-500 text-center gap-3 items-center justify-center p-4 border w-full border-primary rounded"
              >
                <img src={item.image} alt={item.label} className="h-18 " />
                <h1 className="text-sm text-primary font-semibold">{item.label}</h1>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminServices