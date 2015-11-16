using System.Web.UI;
using System.Web.UI.WebControls;

namespace RequireJsTest.Angular
{
    public class AngularAppControl : WebControl
    {
        private const string AngularAppWrapperId = "ng-app-wrapper";

        private string _view;
        public string View
        {
            get { return this._view ?? (this._view = "App"); }
            set { this._view = value; }
        }

        public string App { get; set; }
        public string Directory { get; set; }

        protected override void RenderContents(HtmlTextWriter output)
        {
            var directory = string.IsNullOrEmpty(this.Directory) ? this.App : this.Directory;

            var html = string.Format("<div id=\"{0}\" data-readonly-scope data-directory=\"{1}\" data-app-name=\"{2}\">" +
                                        "<div data-ng-include=\"'{3}.html'\"></div>" +
                                     "</div>", AngularAppWrapperId, directory, this.App, this.View);

            output.Write(html);
        }
    }
}