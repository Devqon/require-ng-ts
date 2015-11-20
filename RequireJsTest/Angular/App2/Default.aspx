<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="RequireJsTest.Angular.App2.Default" %>
<%@ Register tagPrefix="test" namespace="RequireJsTest.Angular" assembly="RequireJsTest" %>

<asp:Content runat="server" ContentPlaceHolderID="MainContent">
    <test:AngularAppControl App="App2" Directory="App2" runat="server" />
</asp:Content>