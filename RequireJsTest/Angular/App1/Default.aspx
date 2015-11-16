<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="RequireJsTest.Angular.App1.Default" %>
<%@ Register tagPrefix="test" namespace="RequireJsTest.Angular" assembly="RequireJsTest" %>

<asp:Content runat="server" ContentPlaceHolderID="MainContent">
    <test:AngularAppControl App="App1" Directory="App1" runat="server" />
</asp:Content>