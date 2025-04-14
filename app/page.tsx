import Announcement from "@/components/page-announcement";
import CustomersReivews from "@/components/page-customers-reviews";
import Header from "@/components/page-header";
import ProductBrief from "@/components/page-product-brief";
import ProductFutures from "@/components/page-product-futures";
import ProtectionPurchase from "@/components/page-protection-purchase";

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
      <ProtectionPurchase
        is_protection_purchase_visible={true}
        features={[
          {
            "icon": "Truck",
            "title": "Free Shipping",
            "short_discreption": "Free delivery $99+"
          },
          {
            "icon": "KeyReturn",
            "title": "Easy Returns",
            "short_discreption": "60-day returns"
          },
          {
            "icon": "Phone",
            "title": "Customer Support",
            "short_discreption": "Mon-Sat, 10am-9pm"
          },
          {
            "icon": "ShieldCheck",
            "title": "Secure Checkout",
            "short_discreption": "Safe Transactions."
          }
        ]}
      />
      <ProductFutures
        is_product_futures_visible={true}
        main_title="This Product Features"
        main_short_discreption="If you used this product, share your thoughts with other customers."
        futures={[
          {
            "icon": "ShoppingBag",
            "short_discreption": "Ac bibendum lacinia nostra netus ultrices pretium aliquet molestie vestibulum neque eget convallis aenean gravida tempus diam lectus mauris ullamcorper nibh.",
            "title": "Collapsible design"
          },
          {
            "icon": "Lightning",
            "short_discreption": "Ac bibendum lacinia nostra netus ultrices pretium aliquet molestie vestibulum neque eget convallis aenean gravida tempus diam lectus mauris ullamcorper nibh.",
            "title": "Ultra stable"
          },
          {
            "icon": "Lock",
            "short_discreption": "Ac bibendum lacinia nostra netus ultrices pretium aliquet molestie vestibulum neque eget convallis aenean gravida tempus diam lectus mauris ullamcorper nibh.",
            "title": "Premium Quality"
          },
          {
            "icon": "TrolleySuitcase",
            "short_discreption": "Ac bibendum lacinia nostra netus ultrices pretium aliquet molestie vestibulum neque eget convallis aenean gravida tempus diam lectus mauris ullamcorper nibh.",
            "title": "Easy To Clean"
          },
          {
            "icon": "GlobeHemisphereEast",
            "short_discreption": "Ac bibendum lacinia nostra netus ultrices pretium aliquet molestie vestibulum neque eget convallis aenean gravida tempus diam lectus mauris ullamcorper nibh.",
            "title": "Help Save The Planet"
          },
          {
            "icon": "Package",
            "short_discreption": "Ac bibendum lacinia nostra netus ultrices pretium aliquet molestie vestibulum neque eget convallis aenean gravida tempus diam lectus mauris ullamcorper nibh.",
            "title": "Multifunctional"
          },
        ]}
      />
      <CustomersReivews
        is_reviews_visible={true}
        main_title="Customers reviews"
        main_short_discreption="If you used this product, share your thoughts with other customers."
        reviews={[
          {
            "review_id": "1",
            "display_name": "Gerrard",
            "has_purchased": true,
            "rate_content": "The boxes are exceptionally beautiful and offer great value for the price. They arrived a remarkable 6 weeks ahead of the expected delivery date.",
            "rate_score": 4.6,
            "time_stamp": new Date('2025-04-12T12:00:00Z')
          },
          {
            "review_id": "2",
            "display_name": "Gerrard",
            "has_purchased": true,
            "rate_content": "The boxes are exceptionally beautiful and offer great value for the price. They arrived a remarkable 6 weeks ahead of the expected delivery date.",
            "rate_score": 4.6,
            "time_stamp": new Date('2025-04-12T12:00:00Z')
          },
          {
            "review_id": "3",
            "display_name": "Gerrard",
            "has_purchased": true,
            "rate_content": "The boxes are exceptionally beautiful and offer great value for the price. They arrived a remarkable 6 weeks ahead of the expected delivery date.",
            "rate_score": 4.6,
            "time_stamp": new Date('2025-04-12T12:00:00Z')
          },
          {
            "review_id": "4",
            "display_name": "Gerrard",
            "has_purchased": true,
            "rate_content": "The boxes are exceptionally beautiful and offer great value for the price. They arrived a remarkable 6 weeks ahead of the expected delivery date.",
            "rate_score": 4.6,
            "time_stamp": new Date('2025-04-12T12:00:00Z')
          },
          {
            "review_id": "5",
            "display_name": "Gerrard",
            "has_purchased": true,
            "rate_content": "The boxes are exceptionally beautiful and offer great value for the price. They arrived a remarkable 6 weeks ahead of the expected delivery date.",
            "rate_score": 4.6,
            "time_stamp": new Date('2025-04-12T12:00:00Z')
          },
          {
            "review_id": "6",
            "display_name": "Gerrard",
            "has_purchased": true,
            "rate_content": "The boxes are exceptionally beautiful and offer great value for the price. They arrived a remarkable 6 weeks ahead of the expected delivery date.",
            "rate_score": 4.6,
            "time_stamp": new Date('2025-04-12T12:00:00Z')
          },
          {
            "review_id": "7",
            "display_name": "Gerrard",
            "has_purchased": true,
            "rate_content": "The boxes are exceptionally beautiful and offer great value for the price. They arrived a remarkable 6 weeks ahead of the expected delivery date.",
            "rate_score": 4.6,
            "time_stamp": new Date('2025-04-12T12:00:00Z')
          },
          {
            "review_id": "8",
            "display_name": "Gerrard",
            "has_purchased": true,
            "rate_content": "The boxes are exceptionally beautiful and offer great value for the price. They arrived a remarkable 6 weeks ahead of the expected delivery date.",
            "rate_score": 4.6,
            "time_stamp": new Date('2025-04-12T12:00:00Z')
          },
          {
            "review_id": "9",
            "display_name": "Gerrard",
            "has_purchased": true,
            "rate_content": "The boxes are exceptionally beautiful and offer great value for the price. They arrived a remarkable 6 weeks ahead of the expected delivery date.",
            "rate_score": 4.6,
            "time_stamp": new Date('2025-04-12T12:00:00Z')
          },
        ]}
      />
    </div>
  );
}
