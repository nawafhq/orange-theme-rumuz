import Announcement from "@/components/page-announcement";
import Header from "@/components/page-header";
import ProductBrief from "@/components/page-product-brief";

export default function Home() {
  return (
    <div>
      <Announcement
        title="Free shipping on all orders over $40!"
        icon="free-shipping"
      />
      <Header
        logo_url={'https://media-hosting.imagekit.io/7bb2dd00d03146ab/Union%20(1).png?Expires=1839172549&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=r~6ZrtzGu63N5od-J4yuRRc9OXhR0JBDPwDEX1E2gN~rQHaoYI00o9BybN6KVESw7o2u1NcP669hf65I6DlN7ubGnh72STeSD80H1ssv6TJBZMOtzMoq20fLSIrFNHs85ArK~t1cpqQyed8aR~oqs3nltRA1cBQdJwSI0MLxbnDbjXXXj8VILapCWPM7Hx~EXbhUrcTcowIFWzi7EGwA9tnhnf62BYQPy6ApZ8Z2z4eQLWCtwMWuevWmYlgHUOQpBUDiXAqPD~YkI-mxBlbYJpZLfI9euDmoOOcRru5FvLasywPRMyvVA5O4tOak75l4OYkzaGZYco8hQe2nIH4K9w__'}
        logo_alt={'Logo'}
      />
      <ProductBrief
        images={[
          "https://assets.lightfunnels.com/cdn-cgi/image/width=1920,quality=80,format=auto/https://assets.lightfunnels.com/account-1/images_library/4735ab11-4217-456b-bde7-b3c5ad580e4a.jpg",
          "https://assets.lightfunnels.com/cdn-cgi/image/width=1920,quality=80,format=auto/https://assets.lightfunnels.com/account-1/images_library/200da6ff-63db-452e-8e4a-151483179837.jpg",
          "https://assets.lightfunnels.com/cdn-cgi/image/width=1920,quality=80,format=auto/https://assets.lightfunnels.com/account-1/images_library/f68ff533-28aa-4457-97bd-1608c7361d78.jpg",
          "https://assets.lightfunnels.com/cdn-cgi/image/width=1920,quality=80,format=auto/https://assets.lightfunnels.com/account-1/images_library/08188db9-859b-4ba0-9c91-511b3f49f679.jpg",
          "https://assets.lightfunnels.com/cdn-cgi/image/width=1920,quality=80,format=auto/https://assets.lightfunnels.com/account-1/images_library/279edf40-6e98-4c8d-abe1-3aefcf01ce8d.jpg"
        ]}
        is_badge_title_visible={true}
        title={"Food Storage Containers"}
        product_price={49.00}
        is_discount_product={true}
        rate_score={4.8}
        rate_count={10}
        long_description={"The Freshware Food Storage Container Set is an excellent option for storing a variety of food items. The containers are safe for use in the freezer, microwave and dishwasher, making them easy to care for. The set includes six different containers in various sizes, making it perfect for storing everything from soups and condiments to salads and leftovers."}
        badge_title={"Trending Product"}
        discount_rate={0.4}
        discount_percentage={40}
        short_description={"For a limited time, seize this Black Friday offer and benefit from a discount on this product. Hurry!"}
        guarantee_detailed_content={"30-day return or refund guarantee. This qualifies you to claim a refund or exchange within 30 days of receiving your items. To submit a claim, contact us at support@yourstore.com"}
        delivery_detailed_content={"Shipping times vary as we do ship worldwide from different fulfillment centers based on your location. Average shipping time is about 7 to 20 working days. Your tracking number will be updated 3-7 days after your order has been shipped."}
        return_detailed_content={"We offer a hassle-free return policy, providing peace of mind and flexibility in case you need to return or exchange any item, Contact us within 30 days from receiving your order and we’ll be happy to assist you."}
      />
    </div>
  );
}
