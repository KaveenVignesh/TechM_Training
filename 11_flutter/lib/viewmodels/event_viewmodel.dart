
import 'package:eventapp/models/event_model.dart';

class EventViewModel {
  Future<List<EventModel>> getEvents() async {
    // Placeholder for fetching events logic
    return [
      EventModel(id: '1', name: 'Event 1', description: 'Description 1'),
      EventModel(id: '2', name: 'Event 2', description: 'Description 2'),
    ];
  }
}