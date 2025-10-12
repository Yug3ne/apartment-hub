import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar"
import { Star } from "lucide-react";



  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "text-yellow-600 bg-yellow-50";
      case "active":
        return "text-green-600 bg-green-50";
      case "expired":
        return "text-red-600 bg-red-50";
      case "signed":
        return "text-green-600 bg-green-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

const LeaseTab = ({ leaseData }: { leaseData: any }) => {
  return (
     <>
     {/* Lease Table Header */}
     <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-700">
     <div className="col-span-3">Property</div>
     <div className="col-span-3">Tenant</div>
     <div className="col-span-1">Start Date</div>
     <div className="col-span-1">End Date</div>
     <div className="col-span-1">Rent</div>
     <div className="col-span-1">Status</div>
     <div className="col-span-2">Rent Change</div>
   </div>

   {/* Lease Table Rows */}
   <div className="divide-y divide-gray-200">
     {leaseData.map((lease : any) => (
       <div
         key={lease.id}
         className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50"
       >
         {/* Property */}
         <div className="col-span-3 flex flex-col">
           <span className="font-semibold text-gray-900">
             {lease.property.name}
           </span>
           <span className="text-sm text-gray-500">
             {lease.property.unit}
           </span>
         </div>

         {/* Tenant */}
         <div className="col-span-3 flex items-center gap-3">
           <Avatar className="h-8 w-8">
             <AvatarImage src={lease.tenant.avatar} />
             <AvatarFallback>
               {lease.tenant.name
                 .split(" ")
                 .map((n) => n[0])
                 .join("")}
             </AvatarFallback>
           </Avatar>
           <div className="flex flex-col">
             <span className="font-semibold text-gray-900">
               {lease.tenant.name}
             </span>
             <span className="text-sm text-gray-500">
               {lease.tenant.role}
             </span>
           </div>
         </div>

         {/* Start Date */}
         <div className="col-span-1 text-gray-700">
           {lease.startDate}
         </div>

         {/* End Date */}
         <div className="col-span-1 text-gray-700">
           {lease.endDate}
         </div>

         {/* Rent */}
         <div className="col-span-1 font-semibold text-gray-900">
           {lease.rent}
         </div>

         {/* Status */}
         <div className="col-span-1">
           <span
             className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
               lease.status.type
             )}`}
           >
             <Star className="h-3 w-3" />
             {lease.status.text}
           </span>
         </div>

         {/* Rent Change */}
         <div className="col-span-2 flex flex-col">
           <span className="font-semibold text-gray-900">
             {lease.rentChange.amount}
           </span>
           <span className="text-sm text-gray-500">
             {lease.rentChange.date}
           </span>
         </div>
       </div>
     ))}
   </div>
   </>
  )
}

export default LeaseTab