import { Button } from "@/components/ui/button";
import { FileText, MoreVertical } from "lucide-react";

const DocumentsTab = () => {
  const documentData = [
    {
      id: 1,
      property: "Sunset Office - Suite 105",
      document: "Lease Agreement - Signed",
      uploadDate: "Jan 15, 2025",
      status: {
        text: "Signed",
        type: "signed",
      },
    },
    {
      id: 2,
      property: "Sunset Office - Suite 106",
      document: "Lease Agreement - Signed",
      uploadDate: "Jan 15, 2025",
      status: {
        text: "Signed",
        type: "signed",
      },
    },
    {
      id: 3,
      property: "Sunset Office - Suite 107",
      document: "Lease Agreement - Signed",
      uploadDate: "Jan 15, 2025",
      status: {
        text: "Signed",
        type: "signed",
      },
    },
    {
      id: 4,
      property: "Sunset Office - Suite 108",
      document: "Lease Agreement - Signed",
      uploadDate: "Jan 15, 2025",
      status: {
        text: "Signed",
        type: "signed",
      },
    },
    {
      id: 5,
      property: "Sunset Office - Suite 109",
      document: "Lease Agreement - Signed",
      uploadDate: "Jan 15, 2025",
      status: {
        text: "Signed",
        type: "signed",
      },
    },
    {
      id: 6,
      property: "Sunset Office - Suite 110",
      document: "Lease Agreement - Signed",
      uploadDate: "Jan 15, 2025",
      status: {
        text: "Signed",
        type: "signed",
      },
    },
    {
      id: 7,
      property: "Sunset Office - Suite 111",
      document: "Lease Agreement - Signed",
      uploadDate: "Jan 15, 2025",
      status: {
        text: "Signed",
        type: "signed",
      },
    },
    {
      id: 8,
      property: "Sunset Office - Suite 112",
      document: "Lease Agreement - Signed",
      uploadDate: "Jan 15, 2025",
      status: {
        text: "Signed",
        type: "signed",
      },
    },
  ];

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

  return (
    <>
      {/* Document Table Header */}
      <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-700">
        <div className="col-span-4">Property</div>
        <div className="col-span-4">Document</div>
        <div className="col-span-2">Upload Date</div>
        <div className="col-span-1">Status</div>
        <div className="col-span-1">Action</div>
      </div>

      {/* Document Table Rows */}
      <div className="divide-y divide-gray-200">
        {documentData.map((doc) => (
          <div
            key={doc.id}
            className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50"
          >
            {/* Property */}
            <div className="col-span-4 text-gray-700">{doc.property}</div>

            {/* Document */}
            <div className="col-span-4 flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded">
                <FileText className="h-4 w-4 text-blue-600" />
              </div>
              <span className="font-semibold text-gray-900">
                {doc.document}
              </span>
            </div>

            {/* Upload Date */}
            <div className="col-span-2 text-gray-700">{doc.uploadDate}</div>

            {/* Status */}
            <div className="col-span-1">
              <span
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  doc.status.type
                )}`}
              >
                {doc.status.text}
              </span>
            </div>

            {/* Action */}
            <div className="col-span-1 flex justify-end">
              <Button variant="ghost" size="sm">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DocumentsTab;
