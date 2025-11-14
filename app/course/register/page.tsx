"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Add this import
import { Button } from "@/components/ui/button";

export default function RegisterFormPage() {
    const [formData, setFormData] = useState({
        full_name: "",
        institution: "",
        current_year: "",
        current_year_other: "",
        course: "",
        course_other: "",
        branch: "",
        branch_other: "",
        phone_number: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState<string>("");
    const router = useRouter(); // Add router hook

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors("");

        // Validate phone number
        if (formData.phone_number.length !== 10) {
            setErrors("Phone number must be exactly 10 digits");
            return;
        }

        // Validate "Other" fields
        if (formData.current_year === "Other" && !formData.current_year_other.trim()) {
            setErrors("Please specify your current year");
            return;
        }
        if (formData.course === "Other" && !formData.course_other.trim()) {
            setErrors("Please specify your course");
            return;
        }
        if (formData.branch === "Other" && !formData.branch_other.trim()) {
            setErrors("Please specify your branch");
            return;
        }

        setSubmitting(true);

        const submissionData = {
            full_name: formData.full_name,
            institution: formData.institution,
            phone_number: formData.phone_number,
            course_id: "vc-course-iit-bhu-2025",
            current_year: formData.current_year === "Other" 
                ? formData.current_year_other 
                : formData.current_year,
            course: formData.course === "Other" 
                ? formData.course_other 
                : formData.course,
            branch: formData.branch === "Other" 
                ? formData.branch_other 
                : formData.branch,
        };

        try {
            const res = await fetch("/api/course/register", {
                method: "POST",
                credentials: "same-origin",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submissionData),
            });

            const data = await res.json();
            if (res.ok) {
                setIsSuccess(true);
            } else {
                setErrors("Registration failed: " + (data?.error || "Unknown error occurred"));
            }
        } catch (err) {
            console.error(err);
            setErrors("Network error. Please check your connection and try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === "phone_number") {
            const numericValue = value.replace(/\D/g, '');
            setFormData({ ...formData, [name]: numericValue });
        } else {
            setFormData({ ...formData, [name]: value });
        }

        if (errors) setErrors("");
    };

    // Add handler for WhatsApp link click
    const handleWhatsAppClick = () => {
        // Small delay to ensure WhatsApp opens before redirect
        setTimeout(() => {
            router.push("/course"); // Update with your actual course page path
        }, 500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 hero-background">
            <div className="max-w-md w-full bg-card/80 backdrop-blur-md border border-border rounded-lg p-8 shadow-lg">
                
                {isSuccess ? (
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">Registration Successful!</h1>
                        <p className="mb-6">
                            Welcome! Please join the official WhatsApp group to get all the updates and course materials.
                        </p>
                        <a
                            href="https://chat.whatsapp.com/FKpfFAEdb001JPVIeDh1J0?mode=wwt"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleWhatsAppClick} // Add onClick handler
                        >
                            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                                Join Now (WhatsApp)
                            </Button>
                        </a>
                    </div>
                ) : (
                    <>
                        <h1 className="text-2xl font-bold mb-6 text-center">Course Registration</h1>
                        
                        {errors && (
                            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                                {errors}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Full Name *</label>
                                <input 
                                    type="text" 
                                    name="full_name" 
                                    required 
                                    value={formData.full_name} 
                                    onChange={handleChange} 
                                    className="w-full px-3 py-2 border border-border rounded bg-background" 
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Institution *</label>
                                <input 
                                    type="text" 
                                    name="institution" 
                                    required 
                                    value={formData.institution} 
                                    onChange={handleChange} 
                                    className="w-full px-3 py-2 border border-border rounded bg-background" 
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Current Year *</label>
                                <select 
                                    name="current_year" 
                                    required 
                                    value={formData.current_year} 
                                    onChange={handleChange} 
                                    className="w-full px-3 py-2 border border-border rounded bg-background"
                                >
                                    <option value="">Select Year</option>
                                    <option value="1st Year">1st Year</option>
                                    <option value="2nd Year">2nd Year</option>
                                    <option value="3rd Year">3rd Year</option>
                                    <option value="4th Year">4th Year</option>
                                    <option value="5th Year">5th Year</option>
                                    <option value="Postgraduate">Postgraduate</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {formData.current_year === "Other" && (
                                <div>
                                    <label className="block text-sm font-medium mb-1">Please Specify Year *</label>
                                    <input
                                        type="text"
                                        name="current_year_other"
                                        required
                                        value={formData.current_year_other}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-border rounded bg-background"
                                        placeholder="e.g., Alumni, Pre-University"
                                    />
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-medium mb-1">Course *</label>
                                <select 
                                    name="course" 
                                    required 
                                    value={formData.course} 
                                    onChange={handleChange} 
                                    className="w-full px-3 py-2 border border-border rounded bg-background"
                                >
                                    <option value="">Select Course</option>
                                    <option value="B.Tech">B.Tech</option>
                                    <option value="M.Tech">M.Tech</option>
                                    <option value="MBA">MBA</option>
                                    <option value="B.S.">B.S. (Bachelor of Science)</option>
                                    <option value="B.Sc">B.Sc</option>
                                    <option value="M.Sc">M.Sc</option>
                                    <option value="Dual Degree (B.Tech + M.Tech)">Dual Degree (B.Tech + M.Tech)</option>
                                    <option value="Integrated (B.Sc + M.Sc)">Integrated (B.Sc + M.Sc)</option>
                                    <option value="Ph.D">Ph.D</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {formData.course === "Other" && (
                                <div>
                                    <label className="block text-sm font-medium mb-1">Please Specify Course *</label>
                                    <input
                                        type="text"
                                        name="course_other"
                                        required
                                        value={formData.course_other}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-border rounded bg-background"
                                        placeholder="e.g., BBA, BCA"
                                    />
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-medium mb-1">Branch *</label>
                                <select 
                                    name="branch" 
                                    required 
                                    value={formData.branch} 
                                    onChange={handleChange} 
                                    className="w-full px-3 py-2 border border-border rounded bg-background"
                                >
                                    <option value="">Select Branch</option>
                                    <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                                    <option value="Electrical Engineering">Electrical Engineering</option>
                                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                                    <option value="Chemical Engineering">Chemical Engineering</option>
                                    <option value="Civil Engineering">Civil Engineering</option>
                                    <option value="Aerospace Engineering">Aerospace Engineering</option>
                                    <option value="Metallurgical & Materials Engineering">Metallurgical & Materials Engineering</option>
                                    <option value="Biotechnology">Biotechnology</option>
                                    <option value="Engineering Physics">Engineering Physics</option>
                                    <option value="Mathematics & Computing">Mathematics & Computing</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Operations">Operations</option>
                                    <option value="Human Resources">Human Resources</option>
                                    <option value="Analytics">Analytics</option>
                                    <option value="Physics">Physics</option>
                                    <option value="Chemistry">Chemistry</option>
                                    <option value="Mathematics">Mathematics</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {formData.branch === "Other" && (
                                <div>
                                    <label className="block text-sm font-medium mb-1">Please Specify Branch *</label>
                                    <input
                                        type="text"
                                        name="branch_other"
                                        required
                                        value={formData.branch_other}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-border rounded bg-background"
                                        placeholder="e.g., Data Science, AI & ML"
                                    />
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-medium mb-1">Phone Number (10 Digits) *</label>
                                <input
                                    type="tel"
                                    name="phone_number"
                                    required
                                    placeholder="9876543210"
                                    value={formData.phone_number}
                                    onChange={handleChange}
                                    minLength={10}
                                    maxLength={10}
                                    pattern="[0-9]{10}"
                                    className="w-full px-3 py-2 border border-border rounded bg-background"
                                />
                            </div>

                            <Button 
                                type="submit" 
                                disabled={submitting} 
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                            >
                                {submitting ? "Registering..." : "Complete Registration"}
                            </Button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
