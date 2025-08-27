import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';

interface LoginModalProps {
  onClose?: () => void;
}

const LoginModal = ({ onClose }: LoginModalProps) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in real app, this would integrate with Supabase
    navigate('/dashboard');
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signup - in real app, this would integrate with Supabase
    navigate('/dashboard');
  };

  const handleSocialLogin = (provider: string) => {
    // Simulate social login - in real app, this would integrate with Supabase
    console.log(`Login with ${provider}`);
    navigate('/dashboard');
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
      <Card className="w-full max-w-md bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 shadow-2xl animate-scale-in">
        <CardHeader className="space-y-6 pb-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-white">Welcome to MedWallet</h1>
              <p className="text-slate-400">Your secure healthcare wallet</p>
            </div>
            <div className="flex items-center space-x-2 text-primary">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-white font-semibold">Angra Saúde</span>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-slate-700/50 p-1">
              <TabsTrigger 
                value="login" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white text-slate-300"
              >
                Log In
              </TabsTrigger>
              <TabsTrigger 
                value="signup"
                className="data-[state=active]:bg-slate-600 data-[state=active]:text-white text-slate-300 border border-slate-600"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            <CardContent className="space-y-6 pt-6 px-0">
              <TabsContent value="login" className="space-y-4 mt-0">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="relative">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email or Username"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 pr-12 h-12"
                      required
                    />
                    <Lock className="absolute right-3 top-3 h-5 w-5 text-slate-400" />
                  </div>

                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 pr-12 h-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-slate-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Lock className="h-5 w-5" />}
                    </button>
                  </div>

                  <div className="flex justify-start">
                    <button
                      type="button"
                      className="text-primary hover:text-primary/80 text-sm transition-colors"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-base font-medium"
                  >
                    <Shield className="mr-2 h-5 w-5" />
                    Log In securely
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4 mt-0">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="relative">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 pr-12 h-12"
                      required
                    />
                    <Mail className="absolute right-3 top-3 h-5 w-5 text-slate-400" />
                  </div>

                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 pr-12 h-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-slate-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Lock className="h-5 w-5" />}
                    </button>
                  </div>

                  <div className="relative">
                    <Input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 pr-12 h-12"
                      required
                    />
                    <Lock className="absolute right-3 top-3 h-5 w-5 text-slate-400" />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-base font-medium"
                  >
                    <Shield className="mr-2 h-5 w-5" />
                    Create Account
                  </Button>
                </form>
              </TabsContent>

              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-slate-600" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-slate-800 px-2 text-slate-400">Or login with</span>
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => handleSocialLogin('google')}
                    className="w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors"
                  >
                    <FaGoogle className="h-5 w-5 text-white" />
                  </button>
                  <button
                    onClick={() => handleSocialLogin('facebook')}
                    className="w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors"
                  >
                    <FaFacebook className="h-5 w-5 text-white" />
                  </button>
                  <button
                    onClick={() => handleSocialLogin('apple')}
                    className="w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors"
                  >
                    <FaApple className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">
                  {activeTab === 'login' ? "Don't have an account? " : "Already have an account? "}
                  <button
                    onClick={() => setActiveTab(activeTab === 'login' ? 'signup' : 'login')}
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    {activeTab === 'login' ? 'Sign Up' : 'Log In'}
                  </button>
                </span>
                <span className="text-slate-500 text-xs">Encrypted Connection</span>
              </div>
            </CardContent>
          </Tabs>
        </CardHeader>
      </Card>
    </div>
  );
};

export default LoginModal;