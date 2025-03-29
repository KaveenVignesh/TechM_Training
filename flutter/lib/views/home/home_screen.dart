import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class HomeScreen extends StatelessWidget {
  final FirebaseFirestore _firestore = FirebaseFirestore.instance;

  HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Events')),
      body: Column(
        children: [
          // Navigation Buttons (Only Profile & Booking History)
          Padding(
            padding: EdgeInsets.all(10.0),
            child: Wrap(
              spacing: 10.0,
              runSpacing: 10.0,
              children: [
                ElevatedButton(
                  onPressed: () => Navigator.pushNamed(context, '/profile'),
                  child: Text("Profile"),
                ),
                ElevatedButton(
                  onPressed: () => Navigator.pushNamed(context, '/bookingHistory'),
                  child: Text("Booking History"),
                ),
              ],
            ),
          ),

          // Event List from Firestore
          Expanded(
            child: StreamBuilder<QuerySnapshot>(
              stream: _firestore.collection('events').snapshots(),
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.waiting) {
                  return Center(child: CircularProgressIndicator());
                }

                if (snapshot.hasError) {
                  return Center(child: Text('Error loading events'));
                }

                if (!snapshot.hasData || snapshot.data!.docs.isEmpty) {
                  return Center(child: Text('No events found'));
                }

                final events = snapshot.data!.docs;

                return ListView.builder(
                  itemCount: events.length,
                  itemBuilder: (context, index) {
                    final event = events[index].data() as Map<String, dynamic>;
                    final eventId = events[index].id;

                    return ListTile(
                      title: Text(event['name']),
                      subtitle: Text(event['description']),
                      trailing: Icon(Icons.arrow_forward),
                      onTap: () {
                        Navigator.pushNamed(
                          context,
                          '/eventDetails',
                          arguments: {'eventId': eventId, 'event': event},
                        );
                      },
                    );
                  },
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
