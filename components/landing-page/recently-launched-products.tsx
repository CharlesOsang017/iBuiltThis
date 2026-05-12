import SectionHeader from '../common/section-header';
import { Calendar, RocketIcon } from 'lucide-react';
import ProductCard from '../products/ProductCard';
import EmptyState from '../common/empty-state';
import { getRecentlyLaunchedProducts } from '@/lib/products/product-select';

const RecentlyLaunchedProducts = async() => {
  const recentlyLaunchedProducts = await getRecentlyLaunchedProducts();
  return (
    <section className="py-20">
      <div className="wrapper space-y-8">
        <SectionHeader
          title="Recently Launched"
          description="Discover the latest products from our community."
          icon={RocketIcon}
        />
        {recentlyLaunchedProducts.length > 0 ? 
        <div className="grid-wrapper">
          {recentlyLaunchedProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
         : 
            <EmptyState message="No products launched in the last week.Check back soon for new launches." icon={Calendar} />
        }
      </div>
    </section>
  );
}

export default RecentlyLaunchedProducts