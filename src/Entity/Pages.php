<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\PagesRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;


#[ORM\Entity(repositoryClass: PagesRepository::class)]
class Pages
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'text')]
    private $presentation;

    #[ORM\Column(type: 'string', length: 255)]
    private $networks;

    #[ORM\OneToOne(inversedBy: 'page', targetEntity: Users::class, cascade: ['persist'])]
    private $user;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $Picture;

   
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPresentation(): ?string
    {
        return $this->presentation;
    }

    public function setPresentation(string $presentation): self
    {
        $this->presentation = $presentation;

        return $this;
    }

    public function getNetworks(): ?string
    {
        return $this->networks;
    }

    public function setNetworks(string $networks): self
    {
        $this->networks = $networks;

        return $this;
    }

    public function getUser(): ?Users
    {
        return $this->user;
    }

    public function setUser(?Users $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->Picture;
    }

    public function setPicture(?string $Picture): self
    {
        $this->Picture = $Picture;

        return $this;
    }

  
   
   
}
