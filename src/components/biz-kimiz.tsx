import { useState, useEffect } from "react";
import { LinkedinIcon } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { VolunteerType } from "@/types/VolunteerType";

const fetchTeamMembers = async () => {
  return await (await fetch("/api/getAllVolunteers")).json();
};

export function BizKimizComponent() {
  const [teamMembers, setTeamMembers] = useState<VolunteerType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeamMembers().then((members) => {
      console.log(members)
      setTeamMembers(members);
      setLoading(false);
    });
  }, []);


  const SkeletonCard = () => (
    <Card className="mb-4 overflow-hidden">
      <Skeleton className="aspect-[4/3] w-full" />
      <CardContent className="p-4">
        <div className="flex items-center space-x-4 mb-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        </div>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full mt-2" />
        <Skeleton className="h-4 w-2/3 mt-2" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-5 w-5" />
      </CardFooter>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-orange-600">Biz Kimiz?</h1>
      <div
        className="columns sm:columns-2 xl:columns-3 gap-5 w-auto"
      >
        {loading
          ? Array(6)
              .fill(null)
              .map((_, index) => <SkeletonCard key={index} />)
          : teamMembers.map((member, index) => (
              <Card key={index} className="mb-4 overflow-hidden">
                <div className="relative w-full">
                  <img
                    src={member.imgURL}
                    alt={member.fullName}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div>
                      <h2 className="text-xl font-semibold">
                        {member.fullName}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {member.department}
                      </p>
                    </div>
                  </div>
                  <p className="text-base-content">{member.motivation}</p>
                </CardContent>
                <CardFooter>
                  
                  <a
                    href={member.linkedinURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {member.linkedinURL && member.linkedinURL.trim() !== "" && <LinkedinIcon className="w-5 h-5" />}
                  </a>
                </CardFooter>
              </Card>
            ))}
      </div>
    </div>
  );
}
