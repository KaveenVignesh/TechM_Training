import 'package:eventapp/models/user_model.dart';

class AuthViewModel {
  Future<UserModel> login(String email, String password) async {
    // Placeholder for login logic
    return UserModel(id: '1', name: 'John Doe', email: email);
  }

  Future<UserModel> register(String name, String email, String password) async {
    // Placeholder for registration logic
    return UserModel(id: '1', name: name, email: email);
  }
}