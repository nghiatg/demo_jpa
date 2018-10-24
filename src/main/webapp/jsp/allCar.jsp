<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>
<head>
<title>List Car</title>
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <script src="/js/jquery.min.js"></script>
    <script src="/js/function.js" type="text/javascript"></script>
</head>
<body>

	<button class="btn-insert">Insert</button>
	<div class="carform">
		<p>Type</p><input type="text" name="action_type">
		<p>ID</p><input type="text" name="form_id">
		<p>Maker</p><input type="text" name="form_maker">
		<p>Model</p><input type="text" name="form_model">
		<p>Year</p><input type="text" name="form_year">
		<p>Color</p><input type="text" name="form_color">
		<p>Note</p><input type="text" name="form_note">
		<input type="submit" value="Done" class="btn-done">
	</div>

	<div id="wrapper">
		<div id="header">
			<h2>List Car</h2>
		</div>
	</div>
	<div id="container" class="container">
		<div id="content">
			<table id ="carTable">
				<tr>
					<th>ID</th>
					<th>Maker</th>
					<th>Model</th>
					<th>Year</th>
					<th>Color</th>
					<th>Note</th>
					<th>Option</th>
					<th>Option</th>
				</tr>
				<c:forEach var="tempCar" items="${carList}">
					<tr>
						<td>${tempCar.carId}</td>
						<td>${tempCar.maker}</td>
						<td>${tempCar.model}</td>
						<td>${tempCar.year}</td>
						<td>${tempCar.color}</td>
						<td>${tempCar.note}</td>
						<td class="Delete"><a href="#">Delete<a>
						<td class="Update"><a href="#">Update<a>
					</tr>
				</c:forEach>
			</table>
		</div>
	</div>
</body>
</html>








