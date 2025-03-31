import 'package:flutter/material.dart';

class EventDetailScreen extends StatelessWidget {
  final Map<String, dynamic> event;

  const EventDetailScreen({super.key, required this.event, required String eventId});

  @override
  Widget build(BuildContext context) {
    // Debugging: Print event data
    print("Event Data: $event");

    return Scaffold(
      appBar: AppBar(title: Text(event['name'] ?? 'Event Details')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Card(
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
          elevation: 3,
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  event['name']?.toString().isNotEmpty == true ? event['name'] : 'No Name',
                  style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 10),
                Text(
                  event['description']?.toString().isNotEmpty == true ? event['description'] : 'No Description',
                  style: TextStyle(fontSize: 16, color: Colors.grey[700]),
                ),
                const SizedBox(height: 10),
                if (event.containsKey('date') && event['date'] != null)
                  Text(
                    "📅 Date: ${event['date']}",
                    style: const TextStyle(fontSize: 14, fontWeight: FontWeight.bold, color: Colors.blueGrey),
                  ),
                const SizedBox(height: 20),
                Align(
                  alignment: Alignment.center,
                  child: ElevatedButton.icon(
                    style: ElevatedButton.styleFrom(
                      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                      backgroundColor: Colors.blue,
                    ),
                    icon: const Icon(Icons.event, color: Colors.white),
                    label: const Text("Book Event", style: TextStyle(color: Colors.white)),
                    onPressed: () {
                      Navigator.pushNamed(context, '/booking', arguments: {'event': event});
                    },
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
