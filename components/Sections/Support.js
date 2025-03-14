import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const Support = (props) => {
    return (
        <section id="support" className={props.className}>
            
            {/* <!-- Container --> */}
            <Container>
                
                {/* <!-- Section title --> */}
                <Row className="justify-content-center">
                    <Col className="col-12 col-md-10 col-lg-6">
                        
                        <div className="section-title text-center">
                            <h3>Frequently Asked Questions</h3>
                            
                        </div>
                        
                    </Col>
                </Row>
                
                <Row>                    
                <Col className="col-12 col-lg-10 offset-lg-1">
            <h2>FAQs for Callers:</h2>
            <Accordion defaultActiveKey="0" flush>
                {/* Callers FAQs */}
                <Accordion.Item eventKey="0">
                    <Accordion.Header as="h5">
                        How do I sign up as a caller?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Exciting times! To join in, create an account with your phone, email, or through your existing Google/Apple account. A unique Viewlo ID will be assigned to your account. Make sure youve got a valid payment method to make calls.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header as="h5">
                        Whats the cost of using the app as a caller?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            The app offers the first 15 seconds of any call for free! If your call lasts less than one minute, the charge is 99 cents. For longer calls, additional fees are incurred depending on the total call duration, including a Stripe fee of .30 cents + 2.9% of each total transaction and tip. We encourage you to visit the Pricing section for a comprehensive breakdown of the costs per minute. To help you estimate the charges for your call, please use the fee estimator located below by inputting the expected call duration time. Note that taxes and additional fees may be applied to the total cost.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header as="h5">
                        How does billing work for callers?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Billing made simple! We’ve partnered with Stripe to process all payments. Add or update your payment information by going to the Payment Method section under “My Money”.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header as="h5">
                        Why was I charged $1.99 when I initiated a call?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Please be assured that the $1.99 charge you see is a temporary authorization hold. This hold is part of our standard process to confirm your payment method and is required to initiate a call. It is not a final charge. After your call concludes, we will calculate the actual cost based on the duration and applicable rates for the service provided. Your final bill will then be adjusted to reflect only the charges for the service used, and the $1.99 hold will be released.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header as="h5">
                        How can I find specific locations on the map?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            To locate a specific address or venue on the map, please utilize the search function located under the "Search" tab. Simply type in the desired address or name of the venue, and the map will display the location you wish to view live. Any active broadcasters who are in the area you have searched for will be shown, allowing you to connect with them for a live view of the place.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header as="h5">
                        How can I start a video call?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Its a breeze! Explore the map using the "Search" tab, find an active broadcaster, view their profile, and tap the "Call" button. Voila – youre connected!
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header as="h5">
                        How can I use live commands during a call?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            If you find yourself in a noisy location, require silence, or wish to maintain anonymity during a call, live commands are at your disposal. Simply tap on the screen while on the call to bring up the live command arrows. These commands allow you to direct the reporter to, for example, turn the camera or adjust the zoom. When you successfully issue a command, the corresponding arrow will illuminate in green to the broadcaster.
                            In the event that a broadcaster cannot fulfill a command, the arrows will turn red, indicating the inability to comply with the request. This intuitive system is designed to enhance communication and control during live interactions, ensuring a smooth and efficient call experience.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header as="h5">
                        How do I end a video call?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            During the call, tap on the end call icon, and find all the details, including the final price, on the confirmation page.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                    <Accordion.Header as="h5">
                        How can I review a reporter after a call?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            After ending a call, provide a rating on a scale of 1-5. Share any issues or feedback in the comments section and feel free to tip the reporter if you had an excellent experience.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                    <Accordion.Header as="h5">
                        What measures should I take to ensure my safety while using the call service?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Your safety and privacy are our utmost priorities. To safeguard your personal details, such as your email address, phone number, name, and location, we have strict confidentiality protocols in place. These pieces of information are securely stored and are never disclosed to broadcasters.
                            When you are on a call, it is crucial that you also adhere to our privacy guidelines. We strongly advise against sharing any personal information during a call. This includes but is not limited to sensitive financial data, passwords, or any other details that could compromise your security.
                            In addition to our internal safeguards, here are a few best practices you can follow to maintain your safety:
                        </p>
                        <ul>
                            <li>Remain anonymous: Avoid mentioning personal details that could reveal your identity or location.</li>
                            <li>Stay vigilant: If you are prompted to share personal information by a caller, please report the incident to help@viewloapp.com.</li>
                            <li>Review our guidelines: Familiarize yourself with our safety and privacy guidelines available on our platform before initiating a call.</li>
                        </ul>
                        <p>
                            For further information on how to protect yourself and ensure a secure experience with our services, please refer to our Terms of Service under Prohibited Activities.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="10">
                    <Accordion.Header as="h5">
                        How can I get customer support?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Need assistance? Contact customer service via email at help@viewloapp.com.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <h2>FAQs for Reporters:</h2>
            <Accordion defaultActiveKey="0" flush>
                {/* Reporters FAQs */}
                <Accordion.Item eventKey="0">
                    <Accordion.Header as="h5">
                        How do I register to become a broadcaster?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Becoming a broadcaster on our platform is straightforward. You can sign up by creating an account using either your phone number, email address, or by linking your existing Google or Apple account. Upon registration, you will receive a unique Viewlo ID that is specific to your account.
                            Before you start broadcasting, it is important to ensure that your payment methods and tax information are properly configured. We have partnered with Stripe, a reputable and secure payment processor, to manage employment verification smoothly and securely. To complete the onboarding process, you will need to provide your Social Security Number (SSN) or Employer Identification Number (EIN).
                            By following these steps, you can quickly set up your account and start broadcasting on our platform with the confidence that your personal and financial information is protected.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header as="h5">
                        How do I earn money as a broadcaster?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Easy! Accept video calls from interested callers and earn based on the duration of the call. Track your earnings in the "My Money" section – its like your personal finance hub.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header as="h5">
                        What is the process for withdrawing my earned funds?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            We ensure that your earnings are conveniently deposited into your account every two weeks, provided you have a balance. If you find yourself in need of accessing your funds more frequently, you can do so by visiting the "My Money" section of our platform. Once there, navigate to the "Cash Out" option and follow the step-by-step instructions to withdraw your earnings.
                            Please be aware that electing to cash out your earnings outside of the regular biweekly schedule will incur additional fees. These fees are in place to cover the transaction costs associated with processing off-cycle payments.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header as="h5">
                        How can I stay safe as a broadcaster?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Your safety and privacy are our utmost priorities. To maintain control over your availability and safeguard your well-being, utilize the "Report" tab within our platform. This feature allows you to dictate when you are ready and willing to go online—make sure to broadcast only when it feels right for you.
                            To safeguard your personal details, such as your email address, phone number, and name, we have strict confidentiality protocols in place. These pieces of information are securely stored and are never disclosed to broadcasters.
                            When you are on a call, it is crucial that you also adhere to our privacy guidelines. We strongly advise against sharing any personal information during a call. This includes but is not limited to sensitive financial data, passwords, or any other details that could compromise your security.
                            In addition to our internal safeguards, here are a few best practices you can follow to maintain your safety:
                        </p>
                        <ul>
                            <li>Remain anonymous: Avoid mentioning personal details that could reveal your identity.</li>
                            <li>Stay vigilant: If you are prompted to share personal information by a caller, please report the incident to help@viewloapp.com.</li>
                            <li>Review our guidelines: Familiarize yourself with our safety and privacy guidelines available on our platform before initiating a call.</li>
                        </ul>
                        <p>
                            For further information on how to protect yourself and ensure a secure experience with our services, please refer to our Terms of Service under Prohibited Activities.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header as="h5">
                        Where can I find my call history as a broadcaster?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Simple! Check out the "Call Log" under the "Profile" tab. Its like a diary of your call activities, showing details like call duration, earnings, and locations.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header as="h5">
                        What if I miss or decline a call?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            No worries! Missed or declined calls get recorded in your transaction history. Just keep that response rate up for positive ratings.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header as="h5">
                        What is the fee structure for broadcasters?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            As a broadcaster using our service, you are entitled to retain 65% of your total earnings. This includes all income derived from calls as well as any tips that callers may give you. Viewlo holds the remaining 35% of the earnings plus other transaction fees imposed by Stripe.
                            To elaborate:
                        </p>
                        <ul>
                            <li>You will receive 65% of the payment made by the caller for each call you complete.</li>
                            <li>However, if a call is terminated by any party within the first 15 seconds, you will not receive any payment for that call.</li>
                            <li>Transaction and deposit fees imposed by Stripe may apply.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header as="h5">
                        Am I required to report my earnings to the IRS?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Yes, as an independent contractor, you are responsible for reporting your income to the IRS. If your earnings exceed $600 in a tax year, we will provide you with a 1099-MISC form, which is necessary for reporting independent contractor income. We recommend consulting with a tax specialist to ensure you understand and fulfill all your tax obligations accurately.
                            For additional information about earnings and payouts, please refer to the Payout FAQs on our platform. This resource can help you navigate the details of receiving and reporting your income, ensuring you remain compliant with tax regulations.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
                </Col>
        
                </Row>
                
                <div className="empty-30"></div>
            </Container>
            
        </section>
    );
}

export default Support;
