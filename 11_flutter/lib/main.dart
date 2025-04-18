import 'package:eventapp/views/booking/payment_screen.dart';
import 'package:eventapp/views/home/event_details_screen.dart';
import 'package:eventapp/views/profile/booking_history_screen.dart';
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:eventapp/views/auth/login_screen.dart';
import 'package:eventapp/views/auth/register_screen.dart';
import 'package:eventapp/views/home/home_screen.dart';
import 'package:eventapp/views/booking/booking_screen.dart';
import 'package:eventapp/views/profile/profile_screen.dart';
import 'firebase_options.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Event Booking App',
      theme: ThemeData(primarySwatch: Colors.blue),
      initialRoute: '/login', // ⬅️ Set LoginScreen as the initial screen
      routes: {
        '/login': (context) => LoginScreen(),
        '/register': (context) => RegisterScreen(),
        '/home': (context) => HomeScreen(),
        '/eventDetails': (context) => EventDetailScreen(event: {}, eventId: ''),
        '/booking': (context) => BookingScreen(eventId: '',),
        '/payment': (context) => PaymentScreen(),
        '/profile': (context) => ProfileScreen(),
        '/bookingHistory': (context) => BookingHistoryScreen(),
      },
    );
  }
}
