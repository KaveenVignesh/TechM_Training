import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';

class ProfileScreen extends StatefulWidget {
  static var routeName;

  const ProfileScreen({super.key});

  @override
  _ProfileScreenState createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  final FirebaseAuth _auth = FirebaseAuth.instance;
  User? user;
  final TextEditingController _nameController = TextEditingController();

  @override
  void initState() {
    super.initState();
    _loadUser();
  }

  void _loadUser() {
    user = _auth.currentUser;
    if (user != null && user!.displayName != null) {
      _nameController.text = user!.displayName!;
    }
    setState(() {}); // Refresh UI
  }

  Future<void> _updateName() async {
    if (_nameController.text.isNotEmpty) {
      await user?.updateDisplayName(_nameController.text);
      await user?.reload(); // Reload user data
      _loadUser(); // Refresh UI
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Profile updated successfully')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Profile')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text("Name:", style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
            TextField(
              controller: _nameController,
              decoration: InputDecoration(
                hintText: user?.displayName ?? 'Not Set',
                border: OutlineInputBorder(),
              ),
            ),
            SizedBox(height: 20),

            Text("Email:", style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
            Text(user?.email ?? "No Email", style: TextStyle(fontSize: 16)),

            SizedBox(height: 30),
            ElevatedButton(
              onPressed: _updateName,
              style: ElevatedButton.styleFrom(
                minimumSize: Size(double.infinity, 50),
              ),
              child: Text("Update Name"),
            ),
          ],
        ),
      ),
    );
  }
}
