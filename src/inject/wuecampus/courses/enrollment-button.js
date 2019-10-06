// TODO smarter with CSS file and html template
const leaveButtonTemplate = `
<div class="studentdash nav-item nav-link" style="padding: 0 3px 0 2px;">
    <a role="button" title="Leave course" class="btn btn-secondary fhs-tooltip" id="logoutBtnA">
        <i class="fa fa-sign-out" style="color: #FFF;"></i>
    </a>
</div>
`;

function addEnrollmentButton() {
    const parentElements = document.getElementsByClassName('studentselfenrole');
    if (parentElements.length === 1) {
        const aElements = parentElements[0].getElementsByTagName('a');
        if (aElements.length === 1) {
            const enrollmentLink = aElements[0].href;

            const courseControls = document.getElementsByClassName('coursecontrols');
            if (courseControls.length === 1) {
                // add btn template 
                courseControls[0].innerHTML += leaveButtonTemplate;

                // and link to leave into dom 
                const logoutBtn = document.getElementById('logoutBtnA');
                logoutBtn.href = enrollmentLink;
            }
        }
    }
}

browser.extension.sendMessage({}, function (response) {
    var readyStateCheckInterval = setInterval(function () {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            /* Adding button to easily leave course here  */
            addEnrollmentButton();
        }
    }, 10);
});