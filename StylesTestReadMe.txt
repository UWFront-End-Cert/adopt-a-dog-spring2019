Adopt-a-Dog 
At the current writing of this test / style document, the UX / UI team has developed 14 personas for the Adopt-a-Dog project.  In review of those personas, it was determined that the range of the various persona categories were so dispersed that a specific target audience for the Adopt-a-Dog website could not be identified.  As a result, this requires the Adopt-a-Dog website to be very inclusive in its function and form.  
For the Adopt-a-Dog website, the following development criteria was derived from the personas:
Site Content – 
* There is an overarching theme of companionship, content should emphasize 
* Photographs, due to the potential of cellular networks, or slower network speeds, photographs need to sized and numbered rendering quickly
* Various age groups will be using this website, language will need to be checked to avoid slang and geographical dialects as well as assessable to screen readers
* Personas revealed some viewers will have English as a second language and may require some translation software, care should be used to ensure word usage is not complex and can be readily translated via online or other software translators
Site Design – 
* Color palette schemes need to have contrast for better visible distinction when rendered on smaller screens or with personas having poor vision or in areas with poor lighting
* Use of responsive design, many of the personas have been identified as mobile users, 
* Some personas have been identified with poor vision may have browsers setting to allow for greater font-size or image rendering, stylesheets should account for and accommodate this possibility
* Given a high percentage of personas are mobile users, there should be ample padding around selection areas to allow a clean selection of the desired object
Site Action – 
* Given most of the personas have been identified as using modern browsers, allows for use of the latest standards, however, outliers using older browsers or security conscious in regards to allowing scripts, the site will need to gracefully fallback to static content
* Due to the potential of cellular networks, or slower network speeds, multiple scripts or library downloads need to sized and limited rendering quickly
* Actions should be limited to needed functionality, given that some of the personas have been identified as not being tech savvy, unnecessary actions (spinning gadgets, extreme transitions, etc.) could cause distractions and frustrations.
Testing the criteria requires the use of several tools and technologies.  Based on the personas, testing was conducted using the following browsers: 
1. Opera – no significant issues identified with regard to site content, design and actions.   Opera was able to render good responsiveness to size changes based on media queries.  There did not appear to be issues with content rendering.  Testing did not identify any non-supported areas for CSS, JavaScript or jQuery.  However, testing did reveal intended design and actions did not work as desired, however, those issues were revealed across all browsers.  The identified issues include opacity with the hovering action over the dog cards, top banner photo masking cart total when in medium size media query, and unevenness rendering content when in small media query.

2. Firefox – no significant differences from above noted.

3. Chrome - no significant differences from above noted.

4. Edge - no significant differences from above noted.

5. IE11 – There were significant issues with rendering content, at the difference media query sizes this was mainly with images on the home page and blog page.  Some of the JavaScript / jQuery did not work with selecting and calculating cart total. Interestingly, the CSS transitions did work well.  Other, issues noted with the other browsers were apparent with IE11 as well.
Personas revealed a widespread use of various platforms. Testing was conducted using the following platforms:
1. Mobile - Galaxy S5 emulator – test confirmed the same issues with unevenness rendering content while in the small media query.

2. iPad emulator – On the medium media query, there was the inability to scroll the entire content of the index and blog pages.

3. Laptop and Desktop – no issues found using MacOS and Windows other than what was observed with the browsers.

