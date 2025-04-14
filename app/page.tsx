import Announcement from "@/components/page-announcement";
import CustomersReivews from "@/components/page-customers-reviews";
import Footer from "@/components/page-footer";
import Header from "@/components/page-header";
import NewsletterSubsicrption from "@/components/page-newsletter-subscription";
import ProductBrief from "@/components/page-product-brief";
import ProductFutures from "@/components/page-product-futures";
import ProtectionPurchase from "@/components/page-protection-purchase";

export default function Home() {
  return (
    <div>
      <Announcement
        title="شحن مجاني لجميع الطلبات التي تزيد عن 200 ريال"
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
        title={"حاويات تخزين الطعام"}
        product_price={450.00}
        is_discount_product={true}
        rate_score={4.8}
        rate_count={10}
        long_description={"مجموعة حاويات فريشوير لتخزين الطعام خيار ممتاز لتخزين مجموعة متنوعة من الأطعمة. هذه الحاويات آمنة للاستخدام في الفريزر والميكروويف وغسالة الأطباق، مما يجعلها سهلة العناية. تتضمن المجموعة ست حاويات بأحجام مختلفة، مما يجعلها مثالية لتخزين كل شيء، من الحساء والتوابل إلى السلطات وبقايا الطعام."}
        badge_title={"المنتج الرائج"}
        discount_rate={0.4}
        discount_percentage={40}
        short_description={"لفترة محدودة، اغتنم عرض الجمعة السوداء واستفد من خصم على هذا المنتج. سارع!"}
        guarantee_detailed_content={"ضمان إرجاع أو استرداد خلال 30 يومًا. هذا يؤهلك لطلب استرداد أو استبدال خلال 30 يومًا من استلامك للمنتجات. لتقديم طلب، تواصل معنا عبر البريد الإلكتروني support@yourstore.com"}
        delivery_detailed_content={"تختلف أوقات الشحن، فنحن نشحن إلى جميع أنحاء العالم من مراكز توزيع مختلفة حسب موقعك. يتراوح متوسط ​​وقت الشحن بين 7 و20 يوم عمل. سيتم تحديث رقم التتبع الخاص بك بعد 3-7 أيام من شحن طلبك."}
        return_detailed_content={"نحن نقدم سياسة إرجاع خالية من المتاعب، مما يوفر راحة البال والمرونة في حالة احتياجك إلى إرجاع أو استبدال أي منتج، اتصل بنا في غضون 30 يومًا من استلام طلبك وسنكون سعداء بمساعدتك."}
      />
      <ProtectionPurchase
        is_protection_purchase_visible={true}
        features={[
          {
            "icon": "Truck",
            "title": "شحن مجاني",
            "short_discreption": "شحن مجاني +200 رس"
          },
          {
            "icon": "KeyReturn",
            "title": "حق الإسترجاع",
            "short_discreption": "60 يوم مدة الإسترجاع"
          },
          {
            "icon": "Phone",
            "title": "دعم فني",
            "short_discreption": "دعم فني على مدار 24/7"
          },
          {
            "icon": "ShieldCheck",
            "title": "طرق دفع آمنة",
            "short_discreption": "مشترياتك لدينا بأمان"
          }
        ]}
      />
      <ProductFutures
        is_product_futures_visible={true}
        main_title="مميزات هذا المنتج"
        main_short_discreption="إذا كنت قد استخدمت هذا المنتج، شارك أفكارك مع العملاء الآخرين."
        futures={[
          {
            "icon": "ShoppingBag",
            "title": "تصميم قابل للطي",
            "short_discreption": "تصميم عملي قابل للطي يوفر سهولة في التخزين ويوفر المساحة بطريقة ذكية."
          },
          {
            "icon": "Lightning",
            "title": "ثبات فائق",
            "short_discreption": "مصمم ليوفر أقصى درجات الثبات أثناء الاستخدام في مختلف الظروف."
          },
          {
            "icon": "Lock",
            "title": "جودة ممتازة",
            "short_discreption": "مصنوع من مواد عالية الجودة لضمان المتانة والأداء الطويل الأمد."
          },
          {
            "icon": "TrolleySuitcase",
            "title": "سهل التنظيف",
            "short_discreption": "يمكن تنظيفه بسهولة دون الحاجة إلى مجهود أو مواد خاصة."
          },
          {
            "icon": "GlobeHemisphereEast",
            "title": "يساهم في حماية الكوكب",
            "short_discreption": "مصمم بمواد صديقة للبيئة لتقليل التأثير البيئي."
          },
          {
            "icon": "Package",
            "title": "متعدد الاستخدامات",
            "short_discreption": "يتميز بوظائف متعددة تناسب مختلف الاحتياجات اليومية."
          }
        ]}
      />
      <CustomersReivews
        is_reviews_visible={true}
        main_title="مراجعات العملاء"
        main_short_discreption="إذا استخدمت هذا المنتج، شارك رأيك مع باقي العملاء."
        reviews={[
          {
            "review_id": "1",
            "display_name": "جيرارد",
            "has_purchased": true,
            "rate_content": "الصناديق جميلة للغاية وتوفر قيمة رائعة مقابل السعر. وصلت قبل الموعد المتوقع بستة أسابيع!",
            "rate_score": 4.6,
            "time_stamp": new Date('2025-04-12T12:00:00Z')
          },
          {
            "review_id": "2",
            "display_name": "جيرارد",
            "has_purchased": true,
            "rate_content": "الصناديق جميلة للغاية وتوفر قيمة رائعة مقابل السعر. وصلت قبل الموعد المتوقع بستة أسابيع!",
            "rate_score": 4.6,
            "time_stamp": new Date('2025-04-12T12:00:00Z')
          },
          {
            "review_id": "3",
            "display_name": "جيرارد",
            "has_purchased": true,
            "rate_content": "الصناديق جميلة للغاية وتوفر قيمة رائعة مقابل السعر. وصلت قبل الموعد المتوقع بستة أسابيع!",
            "rate_score": 4.6,
            "time_stamp": new Date('2025-04-12T12:00:00Z')
          },
          {
            "review_id": "4",
            "display_name": "جيرارد",
            "has_purchased": true,
            "rate_content": "الصناديق جميلة للغاية وتوفر قيمة رائعة مقابل السعر. وصلت قبل الموعد المتوقع بستة أسابيع!",
            "rate_score": 4.6,
            "time_stamp": new Date('2025-04-12T12:00:00Z')
          },
          {
            "review_id": "5",
            "display_name": "جيرارد",
            "has_purchased": true,
            "rate_content": "الصناديق جميلة للغاية وتوفر قيمة رائعة مقابل السعر. وصلت قبل الموعد المتوقع بستة أسابيع!",
            "rate_score": 4.6,
            "time_stamp": new Date('2025-04-12T12:00:00Z')
          },
          {
            "review_id": "6",
            "display_name": "جيرارد",
            "has_purchased": true,
            "rate_content": "الصناديق جميلة للغاية وتوفر قيمة رائعة مقابل السعر. وصلت قبل الموعد المتوقع بستة أسابيع!",
            "rate_score": 4.6,
            "time_stamp": new Date('2025-04-12T12:00:00Z')
          },
          {
            "review_id": "7",
            "display_name": "جيرارد",
            "has_purchased": true,
            "rate_content": "الصناديق جميلة للغاية وتوفر قيمة رائعة مقابل السعر. وصلت قبل الموعد المتوقع بستة أسابيع!",
            "rate_score": 4.6,
            "time_stamp": new Date('2025-04-12T12:00:00Z')
          },
          {
            "review_id": "8",
            "display_name": "جيرارد",
            "has_purchased": true,
            "rate_content": "الصناديق جميلة للغاية وتوفر قيمة رائعة مقابل السعر. وصلت قبل الموعد المتوقع بستة أسابيع!",
            "rate_score": 4.6,
            "time_stamp": new Date('2025-04-12T12:00:00Z')
          },
          {
            "review_id": "9",
            "display_name": "جيرارد",
            "has_purchased": true,
            "rate_content": "الصناديق جميلة للغاية وتوفر قيمة رائعة مقابل السعر. وصلت قبل الموعد المتوقع بستة أسابيع!",
            "rate_score": 4.6,
            "time_stamp": new Date('2025-04-12T12:00:00Z')
          },
        ]}
      />
      <NewsletterSubsicrption />
      <Footer />
    </div>
  );
}
