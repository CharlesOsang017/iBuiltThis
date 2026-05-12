"use cache"
import SectionHeader from "@/components/common/section-header"
import ProductExplorer from "@/components/products/product-explorer"
import { getAllAprovedProducts } from "@/lib/products/product-select"
import { CompassIcon } from "lucide-react"

const Explore = async () => {
    const products = await getAllAprovedProducts()
  return (
    <div className="py-20">
        <div className="wrapper">
            <div className="mb-12">

            <SectionHeader
            title="Explore All Products"
            description="Browse and discover amazing projects from our community"
            icon={CompassIcon}
            />
            </div>
            <ProductExplorer products={products}/>
        </div>
    </div>
  )
}

export default Explore