import { useRef, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

// Initialize Supabase client
const supabase = createClient(
  "https://tduwotqhfzevkvtsbbvb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkdXdvdHFoZnpldmt2dHNiYnZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY5MDY4MTksImV4cCI6MjA0MjQ4MjgxOX0.QraB7X9m8jo9psdLYng99OqL79BFsKt_3SbvVPGBnek"
);

export function EmployeeFormComponent() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    department: "",
    fullName: "",
    linkedinURL: "",
    motivation: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const bucketImgPath = useRef("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDepartmentChange = (value: string) => {
    setFormData((prev) => ({ ...prev, department: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = "";
      if (file) {
        const { data, error } = await supabase.storage
          .from("ogrencimolurmusun-images")
          .upload(`ogrencimolurmusun${Date.now()}`, file);

        if (error) throw error;

        const {
          data: { publicUrl },
        } = supabase.storage
          .from("ogrencimolurmusun-images")
          .getPublicUrl(data.path);
        bucketImgPath.current = data.path;
        imageUrl = publicUrl;
      }

      const response = await fetch("/api/addNewVolunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          imgURL: imageUrl,
        }),
      });

      if (!response.ok) {
        supabase.storage.from("ogrencimolurmusun-images").remove([bucketImgPath.current]);
        throw new Error("Failed to submit form");
      }

      alert("Form submitted successfully!");
      // Reset form here if needed
      router.replace("/");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <div>
        <Label htmlFor="department">Department</Label>
        <Select onValueChange={handleDepartmentChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Website">Website</SelectItem>
            <SelectItem value="Saha">Saha</SelectItem>
            <SelectItem value="Eğitim">Eğitim</SelectItem>
            <SelectItem value="Kaynak">Kaynak</SelectItem>
            <SelectItem value="Sosyal Medya">Sosyal Medya</SelectItem>
            <SelectItem value="Üniversite Temsilcileri">
              Üniversite Temsilcileri
            </SelectItem>
            <SelectItem value="Branş">Branş</SelectItem>
            <SelectItem value="İletişim">İletişim</SelectItem>
            <SelectItem value="Dergi">Dergi</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="img">Profile Image</Label>
        <Input
          id="img"
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          required
        />
      </div>
      <div>
        <Label htmlFor="linkedinURL">LinkedIn URL</Label>
        <Input
          placeholder="LinkedIn hesabınız yoksa boş bırakabilirsiniz."
          id="linkedinURL"
          name="linkedinURL"
          value={formData.linkedinURL}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="motivation">Motivation</Label>
        <Input
          id="motivation"
          name="motivation"
          value={formData.motivation}
          onChange={handleInputChange}
          required
        />
      </div>
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
