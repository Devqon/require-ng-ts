<%%@ Page Title="<%= appName %>" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="RequireJsTest.Angular.<%= directory %>.Default" %%>
<%%@ Register tagPrefix="test" namespace="RequireJsTest.Angular" assembly="RequireJsTest" %>

<asp:Content runat="server" ContentPlaceHolderID="MainContent">
    <test:AngularAppControl App="<%= appName %>" Directory="<%= directory %>" runat="server" />
</asp:Content>