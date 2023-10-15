export default function About() {
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col">
                    <h1><ul><li>About Us</li></ul></h1>
                </div>
            </div>
            <div className="row my-3">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <b>Info</b>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>New </strong>is delay 1 hour.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                News description
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>News description.</strong> <p>A news website is an online platform dedicated to providing up-to-date and relevant information about current events, developments, and stories from around the world. It serves as a digital source for news, allowing users to access news articles, reports, and multimedia content like videos, images, and infographics.

Here are some common features and components of a news website:<br />

1. Headlines and Articles: The website typically features headlines and summaries of the latest news stories, which users can click on to access full articles. These articles cover a wide range of topics, including politics, economics, technology, health, entertainment, sports, and more.<br />

2. Categories and Sections: News websites often organize their content into categories or sections, making it easier for users to find information related to specific topics. Common sections may include World News, Business, Politics, Science, Lifestyle, and Sports.<br />

3. Multimedia Content: To enhance storytelling and engagement, news websites may include multimedia elements such as images, videos, and interactive graphics to provide a more comprehensive view of a story.<br />

4. Search Functionality: Users can search for specific news articles or topics of interest using a search bar. This feature allows for quick access to relevant information.<br />

5. Navigation Menu: A navigation menu helps users browse through different sections of the website and access specific content easily.<br />

6. Breaking News Alerts: Some news websites offer breaking news alerts or notifications, which notify users of significant and time-sensitive events as they occur.<br />

7. Comments and Social Sharing: Many news websites allow readers to comment on articles and share content on social media platforms, promoting interaction and discussion among readers.<br />

8. Archive and Search Features: An archive of past articles and a robust search feature allow users to access historical news reports and research topics.<br />

9. Mobile Responsiveness: News websites are often designed to be mobile-friendly, ensuring that users can access news on smartphones and tablets as well as desktop computers.<br />

10. Advertising: To generate revenue, news websites typically feature advertisements, which can be displayed in various formats throughout the site.<br />

11. Subscription Models: Some news websites offer subscription models, where users can pay for premium access to exclusive content, ad-free browsing, and other benefits.<br />

12. Editorial Staff and Contributors: News websites have dedicated teams of journalists, editors, and contributors responsible for creating and curating content, ensuring accuracy and quality.<br />

13. Credibility and Fact-Checking: Reputable news websites have policies and procedures for fact-checking and ensuring the accuracy of their reporting.<br />

News websites play a crucial role in disseminating information, keeping the public informed, and fostering public discourse on important issues. They are a valuable resource for staying updated on local, national, and global news.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}