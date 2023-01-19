import React from "react";

const Faq = () => {
  return (
    <div className="accordion container" id="accordionPanelsStayOpenExample">
      <h1 className="mt-4">How can we help you ?</h1>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
          <button
            className="accordion-button w-100"
            type="button"
            data-bs-toggle="collapse"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              borderBottom: "1px solid white",
              paddingBottom: "0.5em",
              outline: "none",
            }}
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            1. Why should I choose bidobuy.com over other apps?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div className="accordion-body" style={{ fontSize: "1.3em" }}>
            Bidonbuy.com. is a safe platform where sellers can upload the photos
            of the product they want to sell and the buyer can offer the prices
            at which they wish to purchase the products. The seller can accept
            the highest bid. Therefore this is a very creative and fun way to
            sell and purchase goods without sharing personal information. We
            have chat window you can chat and discussed further with buyer and
            seller. Bidonbuy will not share any personal information to any one.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
          <button
            className="accordion-button  collapsed w-100"
            type="button"
            data-bs-toggle="collapse"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              borderBottom: "1px solid white",
              paddingBottom: "0.5em",
              outline: "none",
            }}
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            2. How do I start bidding?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingTwo"
        >
          <div className="accordion-body" style={{ fontSize: "1.3em" }}>
            Hi, user thank you for asking once a product is up for the purpose
            for bidding you can start bidding by providing the amount that you
            want to purchase it at and you will receive a notification in the
            event that your bid gets accepted. Please refer to the below
            screenshots for further details.
            {/* [Pl. provide the screenshots] */}
            <div className="my-5 d-flex justify-content-center ">
              <div>
                <img
                  className="d-block mb-5"
                  src="https://res.cloudinary.com/dy9xqzsbx/image/upload/v1674108579/faqimages/faqimages/placeBid1ststep_exwhyz.webp"
                  height={window.innerWidth < "576" ? "165vmax" : "350px"}
                ></img>
                <img
                  src="https://res.cloudinary.com/dy9xqzsbx/image/upload/v1674108579/faqimages/faqimages/placeBid2ndstep_xgzsyf.webp"
                  height={window.innerWidth < "576" ? "165vmax" : "350px"}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
          <button
            className="accordion-button  collapsed w-100"
            type="button"
            data-bs-toggle="collapse"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              borderBottom: "1px solid white",
              paddingBottom: "0.5em",
              outline: "none",
            }}
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            3. How do I upload the picture of product I want to sell?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingThree"
        >
          <div className="accordion-body" style={{ fontSize: "1.3em" }}>
            Hi, user please refer to the screenshots for further details.
            {/* [Please provide the screenshots] */}
            <div className="my-5 d-flex justify-content-center ">
              <div>
                <img
                  className="d-block mb-5"
                  src="https://res.cloudinary.com/dy9xqzsbx/image/upload/v1674108579/faqimages/faqimages/addproductandimages1ststep_pdk56z.webp"
                  height={window.innerWidth < "576" ? "165vmax" : "350px"}
                ></img>
                <img
                  src="https://res.cloudinary.com/dy9xqzsbx/image/upload/v1674108578/faqimages/faqimages/addproductandimages2ndsteip_fnd02y.webp"
                  height={window.innerWidth < "576" ? "165vmax" : "350px"}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingFour">
          <button
            className="accordion-button  collapsed w-100"
            type="button"
            data-bs-toggle="collapse"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              borderBottom: "1px solid white",
              paddingBottom: "0.5em",
              outline: "none",
            }}
            data-bs-target="#panelsStayOpen-collapseFour"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseFour"
          >
            4. What about information of buyers and sellers?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingFour"
        >
          <div className="accordion-body" style={{ fontSize: "1.3em" }}>
            Personal information of buyers and sellers is safe with bidonbuy.com
            as we share no information with any third party.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingFive">
          <button
            className="accordion-button  collapsed w-100"
            type="button"
            data-bs-toggle="collapse"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              borderBottom: "1px solid white",
              paddingBottom: "0.5em",
              outline: "none",
            }}
            data-bs-target="#panelsStayOpen-collapseFive"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseFive"
          >
            5. What types of products can be uploaded for sale at bidonbuy.com.?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingFive"
        >
          <div className="accordion-body" style={{ fontSize: "1.3em" }}>
            All the types of products can be sold on bid on bidnobuy.com. But
            products that are harmful, dangerous against the law and violate
            public morality and decency or spread hate towards any person,
            group, community, or gender or violate any other term of use of
            bidonbuy.com (please refer to our term of use) shall not be uploaded
            for the purpose of sale.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingSix">
          <button
            className="accordion-button  collapsed w-100"
            type="button"
            data-bs-toggle="collapse"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              borderBottom: "1px solid white",
              paddingBottom: "0.5em",
              outline: "none",
            }}
            data-bs-target="#panelsStayOpen-collapseSix"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseSix"
          >
            6. What is the process of creating an account on bidonbuy.com.?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseSix"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingSix"
        >
          <div className="accordion-body" style={{ fontSize: "1.3em" }}>
            Create account (please provide the details)) The user are supposed
            to upload personal identification documents which are recognized by
            government of India. After uploading them bidonbuy.com will verify
            the documents and if they are found to be genuine the bidonbuy.com
            will allow the user to create their own personal account. The
            documents shared with bidonbuy.com will remain with bidonbuy.com and
            will not be shared with anybody other than law enforcing agencies in
            the event of a legal requirement.
            {/* [Please attach Screen shot] */}
            <div className="my-5 d-flex justify-content-center ">
              <div>
                <img
                  className="d-block mb-5"
                  src="https://res.cloudinary.com/dy9xqzsbx/image/upload/v1674108578/faqimages/faqimages/createAccount1ststep_c2ymos.webp"
                  height={window.innerWidth < "576" ? "165vmax" : "350px"}
                ></img>
                <img
                  src="https://res.cloudinary.com/dy9xqzsbx/image/upload/v1674108578/faqimages/faqimages/createaccount2ndstep_sivago.webp"
                  height={window.innerWidth < "576" ? "165vmax" : "350px"}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
          <button
            className="accordion-button  collapsed w-100"
            type="button"
            data-bs-toggle="collapse"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              borderBottom: "1px solid white",
              paddingBottom: "0.5em",
              outline: "none",
            }}
            data-bs-target="#panelsStayOpen-collapseSeven"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseSeven"
          >
            7. What is the procedure of sale and purchasing of products?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseSeven"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingSeven"
        >
          <div className="accordion-body" style={{ fontSize: "1.3em" }}>
            Hi, user thank you for asking. The seller is supposed to upload
            genuine picture of the product which they intend to sell using their
            verified account and the bidonbuy.com will verify the product as to
            its legality, whether it is harmful, violates public morality,
            decency or can spread hate against any community, group, gender or
            any other term of use of bidonbuy.com., if it does so it will not be
            upload for sale. In the event it does not violate any of these
            conditions then it will be uploaded 24 hours later on the site for
            the purpose of bidding. the potential buyers using their verified
            account can start offering the prices at which they want to purchase
            it. The seller can then accept the bid by user. After acceptance
            buyer and sellers will be able to see each other’s contact
            information.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingEight">
          <button
            className="accordion-button  collapsed w-100"
            type="button"
            data-bs-toggle="collapse"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              borderBottom: "1px solid white",
              paddingBottom: "0.5em",
              outline: "none",
            }}
            data-bs-target="#panelsStayOpen-collapseEight"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseEight"
          >
            8. How many products can I upload on bidonbuy.com in a month?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseEight"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingEight"
        >
          <div className="accordion-body" style={{ fontSize: "1.3em" }}>
            A seller can post unlimited product on bidonbuy.com and bidonbuy.com
            charges no amount for posting of products.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingNine">
          <button
            className="accordion-button  collapsed w-100"
            type="button"
            data-bs-toggle="collapse"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              borderBottom: "1px solid white",
              paddingBottom: "0.5em",
              outline: "none",
            }}
            data-bs-target="#panelsStayOpen-collapseNine"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseNine"
          >
            9. How can I accept the bid?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseNine"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingNine"
        >
          <div className="accordion-body" style={{ fontSize: "1.3em" }}>
            Once the bidding has been started the seller or the owner of goods
            will start receiving the notifications on the home screen then the
            seller can accept by clicking on it.
            {/* (please provide the screenshot) */}
            <div className="my-5 d-flex justify-content-center ">
              <div>
                <img
                  className="d-block mb-5"
                  src="https://res.cloudinary.com/dy9xqzsbx/image/upload/v1674108578/faqimages/faqimages/acceptbidstep1_j8wix3.webp"
                  height={window.innerWidth < "576" ? "165vmax" : "350px"}
                ></img>
                <img
                  src="https://res.cloudinary.com/dy9xqzsbx/image/upload/v1674108578/faqimages/faqimages/acceptbidstep2_xe5bez.webp"
                  height={window.innerWidth < "576" ? "165vmax" : "350px"}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingTen">
          <button
            className="accordion-button  collapsed w-100"
            type="button"
            data-bs-toggle="collapse"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              borderBottom: "1px solid white",
              paddingBottom: "0.5em",
              outline: "none",
            }}
            data-bs-target="#panelsStayOpen-collapseTen"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTen"
          >
            10. What remedies do I have in the event of abuse from a fellow
            user?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTen"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingTen"
        >
          <div className="accordion-body" style={{ fontSize: "1.3em" }}>
            In the instance of abuse for other user you can report the same to
            Support@bidonbuy.com and bidonbuy will block and prohibit that
            {/* account from further using the app. [pl. provide the screenshot for
            report option for report] */}
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingEleven">
          <button
            className="accordion-button  collapsed w-100"
            type="button"
            data-bs-toggle="collapse"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              borderBottom: "1px solid white",
              paddingBottom: "0.5em",
              outline: "none",
            }}
            data-bs-target="#panelsStayOpen-collapseEleven"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseEleven"
          >
            11. How can I post an ad?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseEleven"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingEleven"
        >
          <div className="accordion-body" style={{ fontSize: "1.3em" }}>
            {/* Please provide screen shot. */}
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingTwelve">
          <button
            className="accordion-button  collapsed w-100"
            type="button"
            data-bs-toggle="collapse"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              borderBottom: "1px solid white",
              paddingBottom: "0.5em",
              outline: "none",
            }}
            data-bs-target="#panelsStayOpen-collapseTwelve"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwelve"
          >
            12. Where can I see the Ads that I posted?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwelve"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingTwelve"
        >
          <div className="accordion-body" style={{ fontSize: "1.3em" }}>
            It’s easy to go to the Ads you have posted. Please follow the steps
            as stated below: Firstly, ensure you are logged in the app with the
            user details you used while posting the Ads. If unsure, then log out
            and log in again. 1. On the bid on buy App home screen, tap on MyAds
            section
            {/* (Please provide screen shots). */}
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingThirteen">
          <button
            className="accordion-button  collapsed w-100"
            type="button"
            data-bs-toggle="collapse"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              borderBottom: "1px solid white",
              paddingBottom: "0.5em",
              outline: "none",
            }}
            data-bs-target="#panelsStayOpen-collapseThirteen"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThirteen"
          >
            13. How to edit/delete an ad?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThirteen"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingThirteen"
        >
          <div className="accordion-body" style={{ fontSize: "1.3em" }}>
            After you have logged in to bid on buy account , Go to My Ads
            {/* (Please give screen shot). */}
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingFourteen">
          <button
            className="accordion-button  collapsed w-100"
            type="button"
            data-bs-toggle="collapse"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              borderBottom: "1px solid white",
              paddingBottom: "0.5em",
              outline: "none",
            }}
            data-bs-target="#panelsStayOpen-collapseFourteen"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseFourteen"
          >
            14. How do I know if people are seeing my ads?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseFourteen"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingFourteen"
        >
          <div className="accordion-body" style={{ fontSize: "1.3em" }}>
            On an Ad page, you can see an “eye shaped” icon mentioning the
            number of views next to it. This shows that your Ad has been seen by
            as many people visiting bid on buy.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingFifteen">
          <button
            className="accordion-button  collapsed w-100"
            type="button"
            data-bs-toggle="collapse"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              borderBottom: "1px solid white",
              paddingBottom: "0.5em",
              outline: "none",
            }}
            data-bs-target="#panelsStayOpen-collapseFifteen"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseFifteen"
          >
            15. Why did my Ad get rejected?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseFifteen"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingFifteen"
        >
          <div className="accordion-body" style={{ fontSize: "1.3em" }}>
            To ensure good user experience for both Buyer & Sellers, we keep
            monitoring the Ads on the platform. Following could be some of the
            potential reasons why your ad did not go live:- There are products
            that our site does not allow since it may violate the Law or bid on
            buy policies. Sellers need to comply with items considered legal or
            valid for sale. While posting an Ad please ensure that you keep the
            title to the point and related to the item. Do not use any profane
            words, phone numbers or special characters in the title. Your Ad
            should contain all relevant information about the product or service
            you are offering such as functionality, specifications, measurement,
            colour, age utility etc. Please note offensive words, religious
            bias, slandering/emotional appeal of any kind, phone number (only in
            case it is different from registered mobile numbers) is not allowed
            and Ad will be rejected. Your Ad could be rejected if the title,
            description or image of your Ad matches with another Ad posted in
            the same city. These are services or products that we do not allow
            on bid on buy for legal or ethical reasons. It is important that you
            post Ads with appropriate images. Make sure that the images are
            real, clear and of good resolution. Additionally, please note that
            it should not be a stock image.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingSixteen">
          <button
            className="accordion-button  collapsed w-100"
            type="button"
            data-bs-toggle="collapse"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              borderBottom: "1px solid white",
              paddingBottom: "0.5em",
              outline: "none",
            }}
            data-bs-target="#panelsStayOpen-collapseSixteen"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseSixteen"
          >
            16. What is bid on buy?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseSixteen"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingSixteen"
        >
          <div className="accordion-body" style={{ fontSize: "1.3em" }}>
            It is india’s largest platform where buyer and seller can buy and
            sell anything from machine to furniture.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingSeventeen">
          <button
            className="accordion-button  collapsed w-100"
            type="button"
            data-bs-toggle="collapse"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              borderBottom: "1px solid white",
              paddingBottom: "0.5em",
              outline: "none",
            }}
            data-bs-target="#panelsStayOpen-collapseSeventeen"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseSeventeen"
          >
            17. Can user add more than 1 product at a time?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseSeventeen"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingSeventeen"
        >
          <div className="accordion-body" style={{ fontSize: "1.3em" }}>
            Yes, user can add number of items at a time. It is user friendly
            website.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingEighteen">
          <button
            className="accordion-button  collapsed w-100"
            type="button"
            data-bs-toggle="collapse"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              borderBottom: "1px solid white",
              paddingBottom: "0.5em",
              outline: "none",
            }}
            data-bs-target="#panelsStayOpen-collapseEighteen"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseEighteen"
          >
            18. What should be format of picture while uploading?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseEighteen"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingEighteen"
        >
          <div className="accordion-body" style={{ fontSize: "1.3em" }}>
            Bid on buy supports any format like jpeg, png.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingNineteen">
          <button
            className="accordion-button  collapsed w-100"
            type="button"
            data-bs-toggle="collapse"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              borderBottom: "1px solid white",
              paddingBottom: "0.5em",
              outline: "none",
            }}
            data-bs-target="#panelsStayOpen-collapseNineteen"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseNineteen"
          >
            19. If I want to know the quality of product before purchasing then
            what should I do?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseNineteen"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingNineteen"
        >
          <div className="accordion-body" style={{ fontSize: "1.3em" }}>
            Go and authenticate in person
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingTwenty">
          <button
            className="accordion-button  collapsed w-100"
            type="button"
            data-bs-toggle="collapse"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              borderBottom: "1px solid white",
              paddingBottom: "0.5em",
              outline: "none",
            }}
            data-bs-target="#panelsStayOpen-collapseTwenty"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwenty"
          >
            20. Do you charge deals?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwenty"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingTwenty"
        >
          <div className="accordion-body" style={{ fontSize: "1.3em" }}>
            Yes, user can add unlimited photos for 21 days as free and user can
            add number of photos for 45 days as premium.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
