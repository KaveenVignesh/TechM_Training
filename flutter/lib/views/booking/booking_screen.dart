import 'package:flutter/material.dart';

class BookingScreen extends StatelessWidget {
  const BookingScreen({super.key, required String eventId});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Booking')),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Book Your Event',
              style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 20),

            // Event Selection
            TextField(
              decoration: InputDecoration(
                labelText: 'Enter Event Name',
                border: OutlineInputBorder(),
              ),
            ),
            SizedBox(height: 16),

            // Number of Tickets
            TextField(
              decoration: InputDecoration(
                labelText: 'Number of Tickets',
                border: OutlineInputBorder(),
              ),
              keyboardType: TextInputType.number,
            ),
            SizedBox(height: 16),

            // Booking Button
            ElevatedButton(
              onPressed: () {
                // Implement Booking Logic Here
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(content: Text('Booking Confirmed!')),
                );
                Navigator.pop(context); // Navigate back after booking
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.blueAccent,
                foregroundColor: Colors.white,
                minimumSize: Size(double.infinity, 50),
              ),
              child: Text('Confirm Booking'),
            ),
          ],
        ),
      ),
    );
  }
}
