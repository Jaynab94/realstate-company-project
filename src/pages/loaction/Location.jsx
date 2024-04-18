import { Helmet } from "react-helmet-async";


const Location = () => {
    return (
        <div>
            <Helmet>
                <title>Luxe | location</title>

            </Helmet>
            <div>
                <p className="text-2xl font-bold text-green-600">
                    Name: Sunset Grill & Bar
                </p>

                <p className="font-serif">Address: 123 Ocean View Avenue, Santa Monica, CA 90401, USA
                    Description: Overlooking the picturesque Santa Monica beach, Sunset Grill & Bar offers a delightful dining experience with a menu featuring fresh seafood, grilled specialties, and signature cocktails. Enjoy stunning sunset views while indulging in a culinary journey at this charming coastal restaurant.</p>




            </div>
        </div>
    );
};

export default Location;