import 'package:flutter/material.dart';

class PaymentScreen extends StatefulWidget {
  const PaymentScreen({super.key});

  @override
  _PaymentScreenState createState() => _PaymentScreenState();
}

class _PaymentScreenState extends State<PaymentScreen> {
  final TextEditingController _cardNumberController = TextEditingController();
  final TextEditingController _expiryDateController = TextEditingController();
  final TextEditingController _cvvController = TextEditingController();
  bool isPayEnabled = false;

  void _checkFields() {
    setState(() {
      isPayEnabled = _cardNumberController.text.isNotEmpty &&
          _expiryDateController.text.isNotEmpty &&
          _cvvController.text.isNotEmpty;
    });
  }

  @override
  void dispose() {
    _cardNumberController.dispose();
    _expiryDateController.dispose();
    _cvvController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Payment')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            // Payment Heading
            Text(
              'Enter your payment details',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 20),

            // Card Number Input
            TextField(
              controller: _cardNumberController,
              onChanged: (_) => _checkFields(),
              decoration: InputDecoration(
                labelText: 'Card Number',
                prefixIcon: Icon(Icons.credit_card),
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(10)),
              ),
              keyboardType: TextInputType.number,
            ),
            SizedBox(height: 16),

            // Expiry Date Input
            TextField(
              controller: _expiryDateController,
              onChanged: (_) => _checkFields(),
              decoration: InputDecoration(
                labelText: 'Expiry Date (MM/YY)',
                prefixIcon: Icon(Icons.date_range),
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(10)),
              ),
              keyboardType: TextInputType.datetime,
            ),
            SizedBox(height: 16),

            // CVV Input
            TextField(
              controller: _cvvController,
              onChanged: (_) => _checkFields(),
              decoration: InputDecoration(
                labelText: 'CVV',
                prefixIcon: Icon(Icons.lock),
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(10)),
              ),
              obscureText: true,
              keyboardType: TextInputType.number,
            ),
            SizedBox(height: 25),

            // Pay Now Button
            ElevatedButton(
              onPressed: isPayEnabled
                  ? () {
                      Navigator.pushNamed(context,'/profile');
                      // Future: Implement payment processing logic
                    }
                  : null,
              style: ElevatedButton.styleFrom(
                backgroundColor: isPayEnabled ? Colors.blueAccent : Colors.grey,
                foregroundColor: Colors.white,
                minimumSize: Size(double.infinity, 50),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
              ),
              child: Text('Pay Now', style: TextStyle(fontSize: 16)),
            ),
          ],
        ),
      ),
    );
  }
}
